import { pgTable } from "drizzle-orm/pg-core";
import {
    id,
    created_at,
    last_access,
    name,
    email,
    password
} from "./user";

export const AdminTable = pgTable('administrator', {
    id,
    created_at,
    last_access,
    name,
    email,
    password
});

export type NewAdmin = typeof AdminTable.$inferInsert;
export type Admin = typeof AdminTable.$inferSelect;