import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import * as pg from 'pg';

const { Client } = pg;

const run = async () => {
    const client = new Client({
        user: 'postgres',
        password: '',
        host: '0.0.0.0',
        port: 5432
    });
    await client.connect();
    const result = await client.query(`SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = current_schema()
    AND table_type = 'BASE TABLE';`);
    const result1 = await client.query(`SELECT current_database() AS database_name`);
    result.rows.forEach(row => {
        console.log(row.table_name);
    });
    result1.rows.forEach(row => {
        console.log(row);
    });

    const db = drizzle(client);
    await migrate(db, { migrationsFolder: "src/db/migrations" });
    console.log('migrations completed!')
}
run();
