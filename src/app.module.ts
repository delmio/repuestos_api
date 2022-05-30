import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
const _db_ = require('../src/configs/dbconfig');

@Module({
  imports: [
    TypeOrmModule.forRoot(_db_.connection),
    UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
