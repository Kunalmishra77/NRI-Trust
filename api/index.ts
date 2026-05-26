import express from "express";
import { createClient } from '@supabase/supabase-js';
import PDFDocument from "pdfkit";
import { calculateAssessment } from "../shared/assessment-engine";
import { sendEmail, getUserTemplate, getAdvisorTemplate } from "./email-service";

const SUPABASE_URL = "https://sxvbtiajmtxlmetutvrw.supabase.co";
const SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4dmJ0aWFqbXR4bG1ldHV0dnJ3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTc0NzQ1MiwiZXhwIjoyMDk1MzIzNDUyfQ.4oJiMllIxhehsORA7kWE_sLd3dBl95oZnYfkiwhlYqY";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ─── HEALTH ──────────────────────────────────────────────────────────────────

app.get("/api/health", async (_req, res) => {
  try {
    const { error } = await supabase.from('assessments').select('id').limit(1);
    res.json({
      status: error ? "degraded" : "ok",
      db: error ? error.message : "connected",
      email_active: !!process.env.GMAIL_USER
    });
  } catch (err: any) {
    res.status(200).json({ status: "error", reason: err.message });
  }
});

// ─── SUBMIT ASSESSMENT ───────────────────────────────────────────────────────

app.post("/api/assessment", async (req, res) => {
  try {
    const { name, email, country, parentLocation, answers } = req.body;

    if (!name || !email || !answers) {
      return res.status(400).json({ success: false, error: "Missing required fields: name, email, answers" });
    }

    const result = calculateAssessment({ ...answers, name });

    // Save to Supabase
    const { data: inserted, error: dbError } = await supabase
      .from('assessments')
      .insert([{
        name,
        email,
        country: country || "Other",
        parent_location: parentLocation || "",
        persona: result.persona,
        risk_score: result.score,
        data: {
          answers,
          flags: result.flags,
          urgency: result.urgency,
          categoryRisks: result.categoryRisks,
          priorityActions: result.priorityActions
        }
      }])
      .select();

    if (dbError) {
      console.error("DB_INSERT_ERROR:", dbError.message);
    }

    const assessmentId = (!dbError && inserted?.[0]?.id) ? inserted[0].id : ("tmp-" + Date.now());
    const pdfUrl = assessmentId.startsWith("tmp-") ? null : `/api/assessment/${assessmentId}/pdf`;

    // Fire-and-forget emails (non-blocking)
    if (!dbError && inserted?.[0]) {
      const advisorEmail = process.env.ADVISOR_EMAIL || "aiagentix2025@gmail.com";
      sendEmail({
        to: email,
        subject: "Your NRI Family Protection Advisory Brief — Confidential",
        html: getUserTemplate(name, result.persona, result.urgency, result.fullSummary, pdfUrl || "#")
      }).catch(console.error);

      sendEmail({
        to: advisorEmail,
        subject: `[${result.persona} ZONE · ${result.urgency}] New Lead: ${name} (${country || "Unknown"})`,
        html: getAdvisorTemplate({ persona: result.persona, urgency: result.urgency, name, email, country, flags: result.flags, summary: result.fullSummary, score: result.score })
      }).catch(console.error);
    }

    res.json({
      success: true,
      assessmentId,
      result: {
        persona: result.persona,
        score: result.score,
        urgency: result.urgency,
        flags: result.flags,
        recommendations: result.recommendations,
        categoryRisks: result.categoryRisks,
        priorityActions: result.priorityActions,
        fullSummary: result.fullSummary,
        pdfUrl
      }
    });

  } catch (error: any) {
    console.error("ASSESSMENT_ERROR:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ─── PDF GENERATION ──────────────────────────────────────────────────────────

app.get("/api/assessment/:id/pdf", async (req, res) => {
  try {
    const { data: assessment, error } = await supabase
      .from('assessments')
      .select('*')
      .eq('id', req.params.id)
      .single();

    if (error || !assessment) {
      return res.status(404).json({ error: "Assessment not found" });
    }

    const result = calculateAssessment({ ...assessment.data.answers, name: assessment.name });

    const doc = new PDFDocument({ margin: 50, size: 'A4', bufferPages: true });
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="NRI_Advisory_Brief_${assessment.name.replace(/\s+/g, '_')}.pdf"`);
    doc.pipe(res);

    generatePDF(doc, assessment, result);
    doc.end();

  } catch (error: any) {
    console.error("PDF_ERROR:", error.message);
    res.status(500).json({ error: "PDF generation failed" });
  }
});

// ─── PDF BUILDER ─────────────────────────────────────────────────────────────

function generatePDF(doc: InstanceType<typeof PDFDocument>, assessment: any, result: any) {
  const PAGE_W = 595.28;
  const MARGIN = 50;
  const CONTENT_W = PAGE_W - MARGIN * 2;
  const GOLD = '#CFA052';
  const DARK = '#0A0F0D';
  const WHITE = '#FFFFFF';
  const LIGHT_GRAY = '#F5F5F5';
  const MID_GRAY = '#888888';
  const TEXT_DARK = '#1A1A1A';

  const personaColors: Record<string, string> = {
    GREEN: '#22c55e',
    ORANGE: '#f97316',
    RED: '#ef4444'
  };
  const zoneColor = personaColors[result.persona] || GOLD;

  // ── HEADER BAND ──
  doc.rect(0, 0, PAGE_W, 110).fill(DARK);
  doc.fillColor(GOLD).font('Times-Bold').fontSize(28).text('NRI TRUST', MARGIN, 28, { lineBreak: false });
  doc.fillColor(WHITE).font('Helvetica').fontSize(9)
    .text('STRICTLY CONFIDENTIAL ADVISORY BRIEF', MARGIN, 70, { lineBreak: false });
  doc.fillColor(MID_GRAY).font('Helvetica').fontSize(8)
    .text('nri-trust.vercel.app  ·  Powered by NRITrust.co', PAGE_W - MARGIN - 200, 70, { width: 200, align: 'right', lineBreak: false });

  // Zone badge (top right)
  const badgeX = PAGE_W - MARGIN - 110;
  doc.roundedRect(badgeX, 22, 110, 28, 4).fill(zoneColor);
  doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(9)
    .text(`${result.persona} ZONE  ·  ${result.urgency}`, badgeX, 31, { width: 110, align: 'center', lineBreak: false });

  // ── PRINCIPAL BLOCK ──
  doc.fillColor(TEXT_DARK).font('Times-Bold').fontSize(11).text('PRINCIPAL', MARGIN, 128);
  doc.fillColor(DARK).font('Helvetica-Bold').fontSize(22).text(assessment.name.toUpperCase(), MARGIN, 143);
  doc.fillColor(zoneColor).font('Helvetica-Bold').fontSize(9)
    .text(`${result.persona} ADVISORY  ·  RISK SCORE: ${result.score}/75  ·  STATUS: ${result.urgency}`, MARGIN, 170);
  doc.fillColor(MID_GRAY).font('Helvetica').fontSize(9)
    .text(`Country of Residency: ${assessment.country || 'Not specified'}  ·  Generated: ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}`, MARGIN, 183);

  doc.moveTo(MARGIN, 200).lineTo(PAGE_W - MARGIN, 200).strokeColor(GOLD).lineWidth(1).stroke();
  let y = 215;

  // ── RISK SNAPSHOT TABLE ──
  doc.fillColor(TEXT_DARK).font('Helvetica-Bold').fontSize(10)
    .text('RISK SNAPSHOT', MARGIN, y);
  y += 18;

  const categories = Object.values(result.categoryRisks) as any[];
  const rowH = 26;
  categories.forEach((cat, i) => {
    const rowBg = i % 2 === 0 ? LIGHT_GRAY : WHITE;
    doc.rect(MARGIN, y, CONTENT_W, rowH).fill(rowBg);
    doc.fillColor(TEXT_DARK).font('Helvetica').fontSize(9).text(cat.label, MARGIN + 8, y + 8, { lineBreak: false });

    const statusColor = cat.status === 'PROTECTED' ? '#22c55e' : cat.status === 'AT_RISK' ? '#ef4444' : '#f97316';
    const statusText = cat.status === 'PROTECTED' ? '✓  PROTECTED' : cat.status === 'AT_RISK' ? '⚠  AT RISK' : '▶  REVIEW';
    doc.fillColor(statusColor).font('Helvetica-Bold').fontSize(9)
      .text(statusText, MARGIN + 8, y + 8, { width: CONTENT_W - 16, align: 'right', lineBreak: false });

    if (cat.status !== 'PROTECTED') {
      doc.fillColor(MID_GRAY).font('Helvetica').fontSize(7.5)
        .text(cat.detail, MARGIN + 8, y + 18, { lineBreak: false });
    }
    y += rowH;
  });

  doc.rect(MARGIN, y - categories.length * rowH, CONTENT_W, categories.length * rowH)
    .strokeColor('#DDDDDD').lineWidth(0.5).stroke();
  y += 18;

  // ── ZONE INTRO ──
  const introLines = result.fullSummary.split('\n\n---\n\n')[0];
  const cleanIntro = introLines.replace(/\*\*(.*?)\*\*/g, '$1');
  doc.fillColor(TEXT_DARK).font('Times-Bold').fontSize(10).text('ADVISORY PROFILE', MARGIN, y);
  y += 14;
  doc.fillColor('#333333').font('Times-Roman').fontSize(9.5)
    .text(cleanIntro, MARGIN, y, { width: CONTENT_W, lineGap: 3 });
  y = doc.y + 14;

  // User's specific context
  const textInput = assessment.data?.answers?.q_red_notes || assessment.data?.answers?.q_orange_notes || assessment.data?.answers?.q_green_notes || '';
  if (textInput.length > 5) {
    doc.rect(MARGIN, y, CONTENT_W, 1).fill(GOLD);
    y += 8;
    doc.fillColor(TEXT_DARK).font('Helvetica-Bold').fontSize(9).text('YOUR SPECIFIC SITUATION', MARGIN, y);
    y += 12;
    doc.fillColor('#444444').font('Helvetica').fontSize(9)
      .text(`"${textInput}"`, MARGIN + 8, y, { width: CONTENT_W - 16, lineGap: 2 });
    y = doc.y + 14;
  }

  doc.moveTo(MARGIN, y).lineTo(PAGE_W - MARGIN, y).strokeColor('#EEEEEE').lineWidth(0.5).stroke();
  y += 14;

  // ── PRIORITY ACTION PLAN ──
  doc.fillColor(TEXT_DARK).font('Helvetica-Bold').fontSize(10).text('YOUR PRIORITY ACTION PLAN', MARGIN, y);
  y += 6;
  doc.fillColor(MID_GRAY).font('Helvetica').fontSize(8)
    .text('Actions sourced from your NRI Trust Playbook — filtered to your zone and risk profile', MARGIN, y);
  y += 18;

  const actions = result.priorityActions as any[];
  actions.forEach((action: any, i: number) => {
    if (y > 750) { doc.addPage(); y = 50; }

    const priorityColor = action.priority === 'CRITICAL' ? '#ef4444' : action.priority === 'HIGH' ? '#f97316' : '#eab308';
    const priorityEmoji = action.priority === 'CRITICAL' ? '●' : action.priority === 'HIGH' ? '●' : '●';

    // Row background
    doc.rect(MARGIN, y, CONTENT_W, 42).fill(i % 2 === 0 ? '#FAFAFA' : WHITE);
    doc.rect(MARGIN, y, 4, 42).fill(priorityColor);

    // Number badge
    doc.circle(MARGIN + 18, y + 21, 10).fill(priorityColor);
    doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(8).text(String(i + 1), MARGIN + 14, y + 17, { width: 8, align: 'center', lineBreak: false });

    // Priority label
    doc.fillColor(priorityColor).font('Helvetica-Bold').fontSize(7.5)
      .text(action.priority, MARGIN + 32, y + 5, { lineBreak: false });

    // Action title
    doc.fillColor(TEXT_DARK).font('Helvetica-Bold').fontSize(9)
      .text(action.action, MARGIN + 32, y + 15, { width: CONTENT_W - 40, lineBreak: false });

    // Why text
    doc.fillColor('#555555').font('Helvetica').fontSize(7.5)
      .text(action.why, MARGIN + 32, y + 28, { width: CONTENT_W - 40, lineBreak: false });

    y += 46;
  });

  y += 10;

  // ── WARNINGS ──
  if (y > 700) { doc.addPage(); y = 50; }
  doc.moveTo(MARGIN, y).lineTo(PAGE_W - MARGIN, y).strokeColor('#EEEEEE').lineWidth(0.5).stroke();
  y += 12;
  doc.fillColor(TEXT_DARK).font('Helvetica-Bold').fontSize(10).text('CRITICAL WARNINGS', MARGIN, y);
  y += 14;

  const warnings = [
    'DO NOT rely on informal family arrangements — they carry zero legal weight in Indian courts.',
    'DO NOT use resident savings accounts for foreign income — FEMA violation invites RBI scrutiny.',
    'DO NOT assume overseas medical insurance covers Indian hospital billing procedures efficiently.',
    'DO NOT postpone a Will until "a better time" — cognitive decline removes the legal capacity to sign.'
  ];
  warnings.forEach(w => {
    if (y > 760) { doc.addPage(); y = 50; }
    doc.rect(MARGIN, y, 3, 14).fill('#ef4444');
    doc.fillColor('#333333').font('Helvetica').fontSize(8.5)
      .text(w, MARGIN + 10, y + 2, { width: CONTENT_W - 10, lineBreak: false });
    y += 20;
  });

  y += 12;

  // ── RECOMMENDATIONS (from flags) ──
  if (result.recommendations && result.recommendations.length > 0) {
    if (y > 700) { doc.addPage(); y = 50; }
    doc.moveTo(MARGIN, y).lineTo(PAGE_W - MARGIN, y).strokeColor('#EEEEEE').lineWidth(0.5).stroke();
    y += 12;
    doc.fillColor(TEXT_DARK).font('Helvetica-Bold').fontSize(10).text('SPECIFIC FINDINGS FOR YOUR PROFILE', MARGIN, y);
    y += 14;

    result.recommendations.forEach((rec: any) => {
      if (y > 740) { doc.addPage(); y = 50; }
      doc.rect(MARGIN, y, CONTENT_W, 1).fill(GOLD);
      y += 6;
      doc.fillColor(DARK).font('Helvetica-Bold').fontSize(9).text(rec.title, MARGIN, y);
      y += 12;
      doc.fillColor('#444444').font('Helvetica').fontSize(8.5)
        .text(rec.description, MARGIN, y, { width: CONTENT_W, lineGap: 2 });
      y = doc.y + 4;
      doc.fillColor(GOLD).font('Helvetica-Bold').fontSize(8)
        .text(`DIRECTIVE: ${rec.action}`, MARGIN, y);
      y = doc.y + 14;
    });
  }

  // ── FOOTER ──
  const pages = doc.bufferedPageRange();
  for (let i = 0; i < pages.count; i++) {
    doc.switchToPage(i);
    doc.rect(0, doc.page.height - 36, PAGE_W, 36).fill(DARK);
    doc.fillColor(GOLD).font('Helvetica-Bold').fontSize(8)
      .text('NRI TRUST', MARGIN, doc.page.height - 24, { lineBreak: false });
    doc.fillColor(MID_GRAY).font('Helvetica').fontSize(7.5)
      .text('CONFIDENTIAL — FOR ADDRESSEE ONLY — DO NOT DISTRIBUTE', MARGIN + 60, doc.page.height - 24, { lineBreak: false });
    doc.fillColor(MID_GRAY).font('Helvetica').fontSize(7.5)
      .text(`Page ${i + 1} of ${pages.count}`, PAGE_W - MARGIN - 50, doc.page.height - 24, { width: 50, align: 'right', lineBreak: false });
  }
}

export default app;
