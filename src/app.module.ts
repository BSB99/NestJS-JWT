import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entity/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    name: "testDB",  
    type: "mysql",
    host : "127.0.0.1",
    port : 5306,
    username : "root",
    password : "root",
    database : "test_2",
    entities: [User],
    synchronize: true,
}),
UserModule,
AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
