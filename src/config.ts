import { registerAs } from "@nestjs/config";

export const DbConfig = registerAs('database', () => ({
    user: 'dev',
    password: 'dev',
    host: '0.0.0.0',
    port: 5432,
    database: 'space_reservation_users'
}));