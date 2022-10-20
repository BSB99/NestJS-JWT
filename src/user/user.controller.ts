import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignInDto } from '../auth/dto/sign-in.dto';
import { SignUpDto } from './dto/sing-up.dto';

@Controller('user')
export class UserController {
    constructor(private UserService: UserService) {}

    @Post('sign-up')
    async signUp(@Body() signUpDto: SignUpDto) {
        try {
            const response = await this.UserService.signUp(signUpDto);

            return response;
        } catch (err) {
            throw err;
        }
    }
}
