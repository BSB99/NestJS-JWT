import { IsEmail, IsNotEmpty, IsString } from "@nestjs/class-validator";

export class SignUpDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    password: string

    @IsString()
    name: string
}