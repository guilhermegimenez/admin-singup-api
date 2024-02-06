import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DbConfig } from "src/config";
import { DatabaseModule } from "../db/db.module";

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [DbConfig]
        }),
        DatabaseModule
    ]
})
export class GlobalModule { }