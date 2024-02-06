import { ConfigType } from '@nestjs/config';
import * as schema from './schemas';
import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import { DbConfig } from 'src/config';
import { Pool } from 'pg';
import { FactoryProvider, Global, Inject, Logger, Module } from '@nestjs/common';

export const DB_POOL = Symbol('DB_POOL');
export const DB = Symbol('DB_SERVICE');
export type DbType = NodePgDatabase<typeof schema>;

const createLocalConnection = async (dbConfig: ConfigType<typeof DbConfig>) => {
    return new Pool(dbConfig);
}

export const DbPoolProvider: FactoryProvider = {
    provide: DB_POOL,
    inject: [DbConfig.KEY],
    useFactory: async (dbConfig) => { //: ConfigType<typeof DbConfig>
        const logger = new Logger('DB_POOL');

        logger.debug('Connecting to db');

        const pool = await createLocalConnection(dbConfig);

        logger.debug('Connected to Dabatabase!');

        pool.on('error', (err) => {
            logger.error('A client has an error', err.stack);
        });

        return pool;
    }
}

export const DbProvider: FactoryProvider = {
    provide: DB,
    inject: [DB_POOL],
    useFactory: async (pool) => {
        const logger = new Logger('DB');

        logger.debug('Connected to Dabatabase!');

        return drizzle(pool, { schema })
    }
}

@Global()
@Module({
    providers: [DbPoolProvider, DbProvider],
    exports: [DB, DB_POOL]
})
export class DatabaseModule {
    constructor(@Inject(DB_POOL) private pool: Pool) {
    }

    async onModuleDestroy() {
        await this.pool.end();
    }
}