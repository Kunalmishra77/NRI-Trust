import express, { type Request, Response, NextFunction } from "express";
import { Router } from "express";
import { storage } from "./storage";
import { calculateAssessment } from "../shared/assessment-engine";
import PDFDocument from "pdfkit";
import { pool } from "./db";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 1. HARDENED HEALTH CHECK - Will NOT crash if DB is down
app.get("/api/health", async (_req, res) => {
  try {
    const client = await pool.connect();
    const dbCheck = await client.query('SELECT NOW()');
    client.release();
    res.json({ 
      status: "ok", 
      db: "connected", 
      timestamp: dbCheck.rows[0].now
    });
  } catch (err: any) {
    console.error("DB_HEALTH_CHECK_FAILED:", err.message);
    res.status(200).json({ 
      status: "degraded", 
      db: "offline", 
      reason: err.message,
      check_port: "5433",
      ip: "76.13.250.173"
    });
  }
});

// 2. ASSESSMENT ENGINE - Error handling to prevent 500
app.post("/api/assessment", async (req, res) => {
  try {
    const { name, email, country, parentLocation, answers } = req.body;
    
    if (!name || !email || !answers) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const result = calculateAssessment({...answers, name});

    let assessment;
    try {
      assessment = await storage.createAssessment({
        name,
        email,
        country: country || "Other",
        parentLocation: parentLocation || "",
        persona: result.persona,
        riskScore: result.score,
        data: {
          answers,
          flags: result.flags,
          urgency: result.urgency
        }
      });
    } catch (dbErr: any) {
      console.error("CRITICAL: Database offline, returning transient result", dbErr.message);
      // Fallback: Return result without saving if DB is down to prevent 500 error
      return res.json({ 
        success: true, 
        assessmentId: "offline-" + Date.now(),
        offline: true,
        result: {
          ...result,
          pdfUrl: "#" // PDF won't work without DB ID
        }
      });
    }

    res.json({ 
      success: true, 
      assessmentId: assessment.id,
      result: {
        ...result,
        pdfUrl: `/api/assessment/${assessment.id}/pdf`
      }
    });
  } catch (error: any) {
    console.error("API_ASSESSMENT_ERROR:", error.message);
    res.status(200).json({ success: false, error: "Assessment logic failure: " + error.message });
  }
});

// 3. PDF GENERATION
app.get("/api/assessment/:id/pdf", async (req, res) => {
  try {
    const assessment = await storage.getAssessment(req.params.id);
    
    if (!assessment) {
      return res.status(404).send("Assessment record not found or database is unreachable.");
    }

    const result = calculateAssessment({...assessment.data.answers, name: assessment.name});
    const doc = new PDFDocument({ margin: 60, size: 'A4', bufferPages: true });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=NRI_Brief.pdf`);
    doc.pipe(res);

    doc.rect(0, 0, 595.28, 120).fill('#0A0F0D');
    doc.fillColor('#CFA052').font('Times-Bold').fontSize(30).text('NRI TRUST', 60, 40);
    doc.fillColor('#FFFFFF').fontSize(11).font('Helvetica-Bold').text('STRICTLY CONFIDENTIAL ADVISORY BRIEF', 300, 48, { align: 'right' });
    doc.fillColor('#0A0F0D').font('Times-Bold').fontSize(16).text('PRINCIPAL PROFILE:', 60, 160);
    doc.font('Helvetica-Bold').fontSize(26).text(assessment.name.toUpperCase(), 60, 185);
    doc.moveDown(2);
    doc.font('Times-Roman').fontSize(12).fillColor('#333333').text(result.fullSummary.replace(/\*\*(.*?)\*\*/g, '$1'), { lineGap: 6, align: 'justify', width: 475 });
    doc.end();

  } catch (error: any) {
    res.status(500).send("PDF Generation Failed: Database connection timed out.");
  }
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({ error: "System Error", message: err.message });
});

export default app;
