import { sql } from "drizzle-orm";
import { text, timestamp, uuid } from "drizzle-orm/pg-core";

export const name = text('name').notNull();
export const email = text('email').notNull();
export const password = text('password').notNull();

export const id = uuid('id')
    .default(sql`gen_random_uuid()`)
    .primaryKey();

export const created_at = timestamp('created_at')
    .defaultNow()
    .notNull();

export const last_access = timestamp('last_access')
    .defaultNow()
    .notNull();

