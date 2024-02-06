import type { Config } from 'drizzle-kit';

export default
    {
        schema: './src/db/schemas/*',
        out: './src/db/migrations',
        driver: 'pg',
        dbCredentials: {
            user: 'dev',
            password: 'dev',
            host: '0.0.0.0',
            port: 5432,
            database: 'space_reservation_users'
        }
    } satisfies Config;