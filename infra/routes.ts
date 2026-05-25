import { Router, type Express } from "express";
import { storage } from "./storage";
import { calculateAssessment } from "../shared/assessment-engine";
import PDFDocument from "pdfkit";
import { pool } from "./db";

export async function registerRoutes(app: Express) {
  const apiRouter = Router();

  console.log("INTERNAL: Registering API routes...");

  // 1. HARDENED HEALTH CHECK - Tests DB connectivity
  apiRouter.get("/health", async (_req, res) => {
    try {
      const dbCheck = await pool.query('SELECT NOW()');
      res.json({ 
        status: "ok", 
        db: "connected", 
        timestamp: dbCheck.rows[0].now,
        env: process.env.NODE_ENV 
      });
    } catch (err: any) {
      console.error("DB_HEALTH_CHECK_FAILED:", err.message);
      res.status(500).json({ 
        status: "error", 
        db: "failed", 
        message: err.message 
      });
    }
  });

  apiRouter.post("/assessment", async (req, res) => {
    try {
      const { name, email, country, parentLocation, answers } = req.body;
      
      if (!name || !email || !answers) {
        return res.status(400).json({ success: false, error: "Missing required fields" });
      }

      const result = calculateAssessment({...answers, name});

      // Save to storage
      const assessment = await storage.createAssessment({
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

      res.json({ 
        success: true, 
        assessmentId: assessment.id,
        result: {
          ...result,
          pdfUrl: `/api/assessment/${assessment.id}/pdf`
        }
      });
    } catch (error: any) {
      console.error("API_ASSESSMENT_ERROR:", error);
      res.status(500).json({ 
        success: false, 
        error: "Internal processing failure",
        details: error.message 
      });
    }
  });

  apiRouter.get("/assessment/:id/pdf", async (req, res) => {
    try {
      const assessment = await storage.getAssessment(req.params.id);
      
      if (!assessment) {
        return res.status(404).send("Assessment record not found. Please re-run the assessment.");
      }

      const result = calculateAssessment({...assessment.data.answers, name: assessment.name});
      const doc = new PDFDocument({ margin: 60, size: 'A4', bufferPages: true });

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=NRI_Brief_${assessment.name.replace(/\s+/g, '_')}.pdf`);
      doc.pipe(res);

      // PDF Content
      doc.rect(0, 0, 595.28, 120).fill('#0A0F0D');
      doc.fillColor('#CFA052').font('Times-Bold').fontSize(30).text('NRI TRUST', 60, 40);
      doc.fillColor('#FFFFFF').fontSize(11).font('Helvetica-Bold').text('STRICTLY CONFIDENTIAL ADVISORY BRIEF', 300, 48, { align: 'right' });
      doc.fillColor('#0A0F0D').font('Times-Bold').fontSize(16).text('PRINCIPAL PROFILE:', 60, 160);
      doc.font('Helvetica-Bold').fontSize(26).text(assessment.name.toUpperCase(), 60, 185);
      doc.moveDown(2);
      doc.font('Times-Roman').fontSize(12).fillColor('#333333').text(result.fullSummary.replace(/\*\*(.*?)\*\*/g, '$1'), { lineGap: 6, align: 'justify', width: 475 });
      doc.end();

    } catch (error: any) {
      console.error("PDF_GEN_ERROR:", error);
      res.status(500).send("Failed to generate PDF.");
    }
  });

  app.use("/api", apiRouter);
}
