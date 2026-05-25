import { Router, type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { calculateAssessment } from "../shared/assessment-engine";
import PDFDocument from "pdfkit";

export async function registerRoutes(app: Express): Promise<Server> {
  const apiRouter = Router();

  console.log("INTERNAL: Mounting hardened API Router...");

  apiRouter.get("/health", (_req, res) => {
    res.json({ status: "ok", engine: "hardened" });
  });

  apiRouter.post("/assessment", async (req, res) => {
    try {
      const { name, email, country, parentLocation, answers } = req.body;
      
      if (!name || !email || !answers) {
        return res.status(400).json({ success: false, error: "Missing required fields" });
      }

      const result = calculateAssessment({...answers, name});

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
      console.error("CRITICAL_API_ERROR:", error);
      res.status(500).json({ success: false, error: "Assessment calculation failed." });
    }
  });

  // PDF GENERATION ROUTE
  apiRouter.get("/assessment/:id/pdf", async (req, res) => {
    try {
      const assessment = await storage.getAssessment(req.params.id);
      if (!assessment) {
        return res.status(404).send("Assessment not found");
      }

      const result = calculateAssessment({...assessment.data.answers, name: assessment.name});

      const doc = new PDFDocument({ margin: 60, size: 'A4', bufferPages: true });

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=NRI_Family_Protection_Brief_${assessment.name.replace(/\s+/g, '_')}.pdf`);

      doc.pipe(res);

      // --- PDF DESIGN (Premium Private Office Style) ---
      
      // Page 1: Dark Header
      doc.rect(0, 0, 595.28, 120).fill('#0A0F0D');
      doc.fillColor('#CFA052')
         .font('Times-Bold')
         .fontSize(30)
         .text('NRI TRUST', 60, 40);
      
      doc.fillColor('#FFFFFF')
         .fontSize(11) // Increased
         .font('Helvetica-Bold')
         .text('STRICTLY CONFIDENTIAL ADVISORY BRIEF', 300, 48, { align: 'right' });
      
      doc.fontSize(10) // Increased
         .font('Helvetica')
         .fillColor('#999999')
         .text(`Document Ref: ${assessment.id.slice(0,8).toUpperCase()}`, 300, 65, { align: 'right' });

      // Principal Profile Section
      doc.fillColor('#0A0F0D')
         .font('Times-Bold')
         .fontSize(16)
         .text('PRINCIPAL PROFILE:', 60, 160);
      
      doc.font('Helvetica-Bold')
         .fontSize(26)
         .fillColor('#0A0F0D')
         .text(assessment.name.toUpperCase(), 60, 185);

      doc.fontSize(12) // Increased
         .font('Helvetica')
         .fillColor('#444444')
         .text(`Jurisdiction: ${assessment.country}  |  Assessment Date: ${new Date().toLocaleDateString('en-GB')}`, 60, 218);

      doc.rect(60, 240, 475, 1.5).fill('#CFA052'); // Gold separator line

      // Persona & Risk Status Card
      const urgencyColor = result.urgency === 'CRITICAL' ? '#EF4444' : '#CFA052';
      
      doc.rect(60, 265, 475, 80).fill('#FDFCFB'); // Pure cream background
      doc.rect(60, 265, 475, 80).lineWidth(0.5).stroke('#EEEEEE');
      
      doc.fillColor('#0A0F0D')
         .font('Helvetica-Bold')
         .fontSize(12) // Increased
         .text('ADVISORY ZONE:', 90, 288)
         .fillColor('#CFA052')
         .text(`${result.persona} ZONE`, 220, 288);

      doc.fillColor('#0A0F0D')
         .text('RISK STATUS:', 90, 313)
         .fillColor(urgencyColor)
         .text(`${result.urgency} PROFILE`, 220, 313);

      // Comprehensive Report Logic
      doc.moveDown(6);
      
      const renderSection = (title: string, text: string) => {
        doc.fillColor('#0A0F0D')
           .font('Times-Bold')
           .fontSize(18) // Increased
           .text(title.toUpperCase(), 60);
        doc.moveDown(0.6);
        
        const cleanText = text.replace(/\*\*(.*?)\*\*/g, '$1');
        doc.font('Times-Roman')
           .fontSize(13) // Increased from 12 to 13
           .fillColor('#333333')
           .text(cleanText, { lineGap: 7, align: 'justify', width: 475 });
        doc.moveDown(2);
      };

      const summaryParts = result.fullSummary.split('\n\n');
      
      // Part 1: Intro
      renderSection('Strategic Assessment', summaryParts[0]);
      
      // Part 2: Current Status
      renderSection('Structural Vulnerabilities', summaryParts[1]);

      // Part 3: Advisory Directives (The 'A-Z')
      doc.addPage();
      doc.rect(0, 0, 595.28, 40).fill('#0A0F0D'); 
      doc.moveDown(4);
      renderSection('Advisory Directives (A-Z Protocol)', summaryParts[2]);
      
      // Part 4: Critical Warnings
      renderSection('Risk Mitigation (What NOT to do)', summaryParts[3]);
      
      // Part 5: Conclusion
      renderSection('Advisory Conclusion', summaryParts[4]);

      // Page for Priority Cards
      if (result.recommendations.length > 0) {
        doc.addPage();
        doc.rect(0, 0, 595.28, 40).fill('#0A0F0D');
        doc.fillColor('#CFA052')
           .font('Times-Bold')
           .fontSize(16)
           .text('IMMEDIATE ACTION PLAN', 60, 12);

        doc.moveDown(4);
        
        result.recommendations.forEach((rec: any, index: number) => {
          const startY = doc.y;
          if (startY > 680) doc.addPage(); 
          
          doc.rect(60, doc.y, 475, 95).fill('#FDFCFB'); // Increased height
          doc.rect(60, doc.y - 95, 475, 95).lineWidth(1).stroke('#EEEEEE');
          
          doc.fillColor('#0A0F0D') // Dark for title
             .font('Helvetica-Bold')
             .fontSize(13) // Increased
             .text(`${index + 1}. ${rec.title.toUpperCase()}`, 80, doc.y - 80);
          
          doc.fillColor('#444444')
             .font('Helvetica')
             .fontSize(11) 
             .text(rec.description, 80, doc.y - 58, { width: 440, lineGap: 3 });
          
          doc.fillColor('#CFA052')
             .font('Helvetica-Bold')
             .fontSize(11)
             .text(`DIRECTIVE: ${rec.action}`, 80, doc.y - 25);
          
          doc.moveDown(3);
        });
      }

      // Final Footer (Every Page)
      const range = doc.bufferedPageRange();
      for (let i = range.start; i < range.start + range.count; i++) {
        doc.switchToPage(i);
        doc.rect(0, 785, 595.28, 57).fill('#0A0F0D');
        doc.fillColor('#999999')
           .fontSize(9) // Increased
           .font('Helvetica')
           .text('DISCLAIMER: This briefing is for informational purposes only. NRITrust.co does not provide formal legal or medical advice.', 0, 802, { align: 'center', width: 595.28 });
        
        doc.fillColor('#CFA052')
           .fontSize(10) // Increased
           .font('Helvetica-Bold')
           .text('PRIVATE FAMILY OFFICE INTAKE · NRI TRUST ADVISORY', 0, 818, { align: 'center', width: 595.28 });
      }

      doc.end();

    } catch (error: any) {
      console.error("PDF_GEN_ERROR:", error);
      res.status(500).send("Critical error during PDF generation.");
    }
  });

  apiRouter.post("/leads", async (req, res) => {
    try {
      const { name, email, phone, country } = req.body;
      if (!name || !email || !phone || !country) {
        return res.status(400).json({ success: false, error: "Missing principal lead data" });
      }
      res.json({ success: true, message: "Lead captured" });
    } catch (error: any) {
      res.status(500).json({ success: false, error: "Lead processing failed." });
    }
  });

  app.use("/api", apiRouter);

  const httpServer = createServer(app);
  return httpServer;
}
