import express from "express";
import { createClient } from '@supabase/supabase-js';
import PDFDocument from "pdfkit";
import { calculateAssessment } from "../shared/assessment-engine";
import { sendEmail, getUserTemplate, getAdvisorTemplate } from "./email-service";

const supabaseUrl = "https://sxvbtiajmtxlmetutvrw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4dmJ0aWFqbXR4bG1ldHV0dnJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3NDc0NTIsImV4cCI6MjA5NTMyMzQ1Mn0.UcXQZicWRhfPP03Eapv0h9RVfp6lVpEV-Whq001FQIw";
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/health", async (_req, res) => {
  try {
    const { data, error } = await supabase.from('assessments').select('id').limit(1);
    if (error) throw error;
    res.json({ status: "ok", api: "connected", email_active: !!process.env.GMAIL_USER });
  } catch (err: any) {
    res.status(200).json({ status: "degraded", api: "error", reason: err.message });
  }
});

app.post("/api/assessment", async (req, res) => {
  try {
    const { name, email, country, parentLocation, answers } = req.body;
    if (!name || !email || !answers) return res.status(400).json({ error: "Missing fields" });

    const result = calculateAssessment({...answers, name});

    // 1. Save to Supabase
    const { data: inserted, error } = await supabase
      .from('assessments')
      .insert([
        {
          name,
          email,
          country: country || "Other",
          parent_location: parentLocation || "",
          persona: result.persona,
          risk_score: result.score,
          data: { answers, flags: result.flags, urgency: result.urgency }
        }
      ])
      .select();

    const assessmentId = error ? ("temp-" + Date.now()) : inserted[0].id;

    // 2. TRIGGER EMAILS (Fire and forget in background)
    if (!error) {
      // To User
      sendEmail({
        to: email,
        subject: "Confidential Brief: Your NRI Family Protection Analysis",
        html: getUserTemplate(name, result.fullSummary)
      });

      // To Advisor/Owner
      sendEmail({
        to: process.env.ADVISOR_EMAIL || "aiagentix2025@gmail.com",
        subject: `[${result.persona}] New High-Intent Lead: ${name}`,
        html: getAdvisorTemplate({
          persona: result.persona,
          name,
          email,
          country,
          summary: result.fullSummary,
          flags: result.flags
        })
      });
    }

    res.json({ 
      success: true, 
      assessmentId,
      result: { 
        ...result, 
        pdfUrl: assessmentId.startsWith("temp") ? "#" : `/api/assessment/${assessmentId}/pdf` 
      }
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/assessment/:id/pdf", async (req, res) => {
  try {
    const { data: assessment, error } = await supabase
      .from('assessments')
      .select('*')
      .eq('id', req.params.id)
      .single();

    if (error || !assessment) return res.status(404).send("Brief not found");

    const result = calculateAssessment({...(assessment.data.answers), name: assessment.name});
    const doc = new PDFDocument({ margin: 60, size: 'A4' });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=NRI_Brief.pdf`);
    doc.pipe(res);

    doc.rect(0, 0, 595.28, 120).fill('#0A0F0D');
    doc.fillColor('#CFA052').font('Times-Bold').fontSize(30).text('NRI TRUST', 60, 40);
    doc.fillColor('#FFFFFF').fontSize(11).font('Helvetica-Bold').text('STRICTLY CONFIDENTIAL BRIEF', 300, 48, { align: 'right' });
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
