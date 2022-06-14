import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../../../entities/profile.entity';

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(Profile) private profileRepository: Repository<Profile>
    ) {}

    async create(_id: number, _administrador: boolean){

        const newProfile = new Profile();

        newProfile.id_usuario = _id;
        newProfile.administrador = _administrador;

        return this.profileRepository.save(newProfile);
        
    }


}
