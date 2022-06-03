import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    async findAll(){
        return await this.userRepository.find();
    }

    create(body: any){

        const newUser = new User();

        newUser.run         = body.run.trim();
        newUser.nombres     = body.nombres.trim();
        newUser.ape_pater   = body.ape_pater.trim();
        newUser.ape_mater   = body.ape_mater.trim();
        
        return this.userRepository.save(newUser);
    }

    async updateById(body: any){

        const user = await this.userRepository.findOne(body.id);

        this.userRepository.merge(user, body);
        
        return this.userRepository.save(user);
    }


}
