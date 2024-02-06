import { Inject, Injectable } from "@nestjs/common";
import { DB, DbType } from "src/db/db.module";
import { Admin, AdminTable, NewAdmin } from "src/db/schemas";
import * as bcrypt from 'bcrypt';
import { resolve } from "path";
@Injectable()
export class AdminRepository {
    constructor(@Inject(DB) private readonly database: DbType) { }
    public async create(newAdmin: NewAdmin): Promise<Admin> {
        const salt = 10;
        const pass = bcrypt.hashSync(newAdmin.password, salt);

        const [admin] = await this.database
            .insert(AdminTable)
            .values({
                ...newAdmin,
                password: pass
            })
            .returning();

        return admin;
    }

}