import express, { type Request, Response } from "express";

const app = express();

app.get("/api/health", (req, res) => {
  res.json({ 
    status: "ok", 
    message: "Server is alive without DB",
    env: process.env.NODE_ENV,
    db_configured: !!process.env.DATABASE_URL
  });
});

export default app;
