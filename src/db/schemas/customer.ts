import { pgTable } from "drizzle-orm/pg-core";

import {
    id,
    created_at,
    last_access,
    name,
    email,
    password
} from "./user";

export const CutomerSchema = pgTable('customer', {
    id,
    created_at,
    last_access,
    name,
    email,
    password
});