import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from '@shared/schema';

// HARDENED: Trim whitespace and newlines from the connection string
// This fixes the 500 error caused by Vercel CLI environment variable injection
const rawUrl = process.env.DATABASE_URL;

if (!rawUrl) {
  throw new Error("DATABASE_URL must be set in Vercel environment variables.");
}

const cleanUrl = rawUrl.trim();

export const pool = new pg.Pool({
  connectionString: cleanUrl,
});

export const db = drizzle(pool, { schema });
