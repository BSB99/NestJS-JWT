import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule,
    JwtModule.register({
    // .env에 보관
    secret: 'SECRET_KEY',
    // 토큰 유효 기간
    signOptions: { expiresIn: '60d' },
  })],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
