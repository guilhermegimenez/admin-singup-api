import { drizzle } from "drizzle-orm/node-postgres";
import pg from 'pg';
import * as schema from './schemas';

const { Pool } = pg;

export const pool = new Pool({
    user: 'dev',
    password: 'dev',
    host: '0.0.0.0',
    port: 5432,
    database: 'space_reservation_users'
});

export const db = drizzle(pool, { schema });