import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('sign-in')
    async login(@Body() signInDto: SignInDto, @Res() res: Response) {
        const jwt = await this.authService.validateUser(signInDto);
        res.setHeader('Authorization', 'Bearer ' + jwt.accessToken)
        
        return res.json(jwt)
    }
}
