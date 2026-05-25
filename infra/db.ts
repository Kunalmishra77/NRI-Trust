import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from '@shared/schema';

// HARDENED: Trim whitespace and handle SSL
const rawUrl = process.env.DATABASE_URL;

if (!rawUrl) {
  throw new Error("DATABASE_URL is missing in environment.");
}

const cleanUrl = rawUrl.trim();

export const pool = new pg.Pool({
  connectionString: cleanUrl,
  // VPS often doesn't have SSL setup for Postgres by default
  ssl: false 
});

export const db = drizzle(pool, { schema });
