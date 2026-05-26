import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from '@shared/schema';

// Supabase Connection String Handling
const rawUrl = process.env.DATABASE_URL;

if (!rawUrl) {
  throw new Error("DATABASE_URL is missing.");
}

// STRIP EVERYTHING: Newlines, carriage returns, spaces, quotes
const cleanUrl = rawUrl.replace(/[\n\r"'\s]/g, '');

console.log("DB_INIT: Attempting connection with sanitized URL...");

export const pool = new pg.Pool({
  connectionString: cleanUrl,
  ssl: { rejectUnauthorized: false },
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 15000, // Increased
});

// Capture and log pool errors
pool.on('error', (err) => {
  console.error('DB_POOL_ERROR:', err.message);
});

export const db = drizzle(pool, { schema });
