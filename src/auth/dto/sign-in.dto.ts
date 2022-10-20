import { IsEmail, IsNotEmpty, IsString } from "@nestjs/class-validator";

export class SignInDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    password: string
}