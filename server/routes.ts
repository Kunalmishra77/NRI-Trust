import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Lead submission endpoint - forwards to Google Sheets
  app.post("/api/leads", async (req, res) => {
    try {
      const { name, email, phone, country, service, message, consent } = req.body;

      // Validate required fields
      if (!name || !email || !phone || !country) {
        return res.status(400).json({ success: false, error: "Missing required fields" });
      }

      const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
      
      if (!webhookUrl) {
        console.error("Google Sheets webhook URL not configured");
        return res.status(500).json({ success: false, error: "Server configuration error" });
      }

      // Forward to Google Sheets
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          country,
          service: service || "Not specified",
          message: message || "",
          consent: consent || false,
        }),
      });

      if (!response.ok) {
        throw new Error(`Google Sheets responded with status ${response.status}`);
      }

      res.json({ success: true, message: "Lead submitted successfully" });
    } catch (error) {
      console.error("Lead submission error:", error);
      res.status(500).json({ success: false, error: "Failed to submit lead" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
