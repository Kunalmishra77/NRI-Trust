import express, { type Request, Response, NextFunction } from "express";
import { sql, eq } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, jsonb } from "drizzle-orm/pg-core";
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import PDFDocument from "pdfkit";
import { calculateAssessment } from "../shared/assessment-engine";

// --- INLINE SCHEMA & DB (Fixed Vercel Module Resolution) ---

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const assessments = pgTable("assessments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  country: text("country").notNull(),
  parentLocation: text("parent_location"),
  persona: text("persona").notNull(),
  riskScore: integer("risk_score").notNull(),
  data: jsonb("data").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

const rawUrl = process.env.DATABASE_URL;
if (!rawUrl) throw new Error("DATABASE_URL is missing.");
const cleanUrl = rawUrl.replace(/[\n\r"'\s]/g, '');

const pool = new pg.Pool({
  connectionString: cleanUrl,
  ssl: { rejectUnauthorized: false },
  max: 1, // Only 1 connection per serverless instance
  connectionTimeoutMillis: 10000,
});

const db = drizzle(pool);

// --- APP LOGIC ---

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/health", async (_req, res) => {
  try {
    const dbCheck = await pool.query('SELECT NOW()');
    res.json({ status: "ok", db: "connected", time: dbCheck.rows[0].now });
  } catch (err: any) {
    res.status(200).json({ status: "degraded", db: "offline", reason: err.message });
  }
});

app.post("/api/assessment", async (req, res) => {
  try {
    const { name, email, country, parentLocation, answers } = req.body;
    if (!name || !email || !answers) return res.status(400).json({ error: "Missing fields" });

    const result = calculateAssessment({...answers, name});

    let assessmentId = "temp-" + Date.now();
    try {
      const [inserted] = await db.insert(assessments).values({
        name,
        email,
        country: country || "Other",
        parentLocation: parentLocation || "",
        persona: result.persona,
        riskScore: result.score,
        data: { answers, flags: result.flags, urgency: result.urgency }
      }).returning();
      assessmentId = inserted.id;
    } catch (dbErr: any) {
      console.error("DB_SAVE_FAIL:", dbErr.message);
    }

    res.json({ 
      success: true, 
      assessmentId,
      result: { ...result, pdfUrl: assessmentId.startsWith("temp") ? "#" : `/api/assessment/${assessmentId}/pdf` }
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/assessment/:id/pdf", async (req, res) => {
  try {
    const [assessment] = await db.select().from(assessments).where(eq(assessments.id, req.params.id));
    if (!assessment) return res.status(404).send("Record not found");

    const result = calculateAssessment({...((assessment.data as any).answers), name: assessment.name});
    const doc = new PDFDocument({ margin: 60, size: 'A4' });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=NRI_Brief.pdf`);
    doc.pipe(res);

    doc.rect(0, 0, 595.28, 120).fill('#0A0F0D');
    doc.fillColor('#CFA052').font('Times-Bold').fontSize(30).text('NRI TRUST', 60, 40);
    doc.fillColor('#FFFFFF').fontSize(11).font('Helvetica-Bold').text('CONFIDENTIAL ADVISORY BRIEF', 300, 48, { align: 'right' });
    doc.fillColor('#0A0F0D').font('Times-Bold').fontSize(16).text('PRINCIPAL:', 60, 160);
    doc.font('Helvetica-Bold').fontSize(26).text(assessment.name.toUpperCase(), 60, 185);
    doc.moveDown(2);
    doc.font('Times-Roman').fontSize(12).fillColor('#333333').text(result.fullSummary.replace(/\*\*(.*?)\*\*/g, '$1'), { lineGap: 6, width: 475 });
    doc.end();
  } catch (error: any) {
    res.status(500).send("PDF Fail");
  }
});

export default app;
