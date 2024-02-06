import { IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateAdminDto {
    @IsInt()
    readonly id?: number;

    @IsEmail()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;
}
