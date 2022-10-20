import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dto/sign-in.dto';
import { Payload } from './security/payload.interface';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        ) {}

        async validateUser(signInDto: SignInDto) {
            const {email} = signInDto
            const user: User = await this.userService.getByEmail(email);
            const payload: Payload = { email: user.email, name: user.name };
        
            return {
                accessToken: this.jwtService.sign(payload),
            };
        }
}
