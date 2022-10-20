import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/sing-up.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User, 'testDB')
        private user: Repository<User>,
    ){}

    async signUp(signUpDto: SignUpDto) {
        try {
            const {email, password, name} = signUpDto;
            const student = this.user.create({email, password, name});
            
            await this.user.save(student);
            return student;
        } catch (err) {
            throw err;
        }
    }

    async getByEmail(email: string) {
        console.log(email);
        const user = await this.user.findOne({where: {email}});

        if (!user) {
            throw new NotFoundException(`${email}에 해당하는 유저를 찾을 수 없습니다.`);
        }

        return user;
    }

    
}
