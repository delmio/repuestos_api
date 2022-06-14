import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './services/users.service';
import { ProfileService } from './services/profile.service';
import { UsersController } from './controllers/users.controller';
import { User } from '../../entities/user.entity';
import { Profile } from '../../entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User,Profile])],
  providers: [UsersService,ProfileService],
  controllers: [UsersController]
})
export class UsersModule {}
