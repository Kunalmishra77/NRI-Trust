import express from "express";
import pg from 'pg';

const app = express();
app.use(express.json());

const rawUrl = process.env.DATABASE_URL;
const cleanUrl = rawUrl ? rawUrl.replace(/[\n\r"'\s]/g, '') : "";

const pool = new pg.Pool({
  connectionString: cleanUrl,
  ssl: { rejectUnauthorized: false },
  connectionTimeoutMillis: 5000,
});

app.get("/api/health", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();
    res.json({ 
      status: "ok", 
      db: "connected", 
      time: result.rows[0].now 
    });
  } catch (err: any) {
    res.json({ 
      status: "error", 
      message: "Database connection failed",
      reason: err.message,
      url_debug: cleanUrl.slice(0, 15) + "..."
    });
  }
});

export default app;
