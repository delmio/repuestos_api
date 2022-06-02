import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('api/users')
export class UsersController {

    constructor(
        private usersService: UsersService
    ) {}

    @Get()
    getAll(){
        console.log("wtf");
        return this.usersService.findAll();
    }

    @Post()
    create(@Body() body: any){
        return this.usersService.create(body);
    }

    @Put('/byId')
    updateById(@Body() body: any){
        return this.usersService.updateById(body);
    }

    @Delete('/byId')
    deleteById(@Body() body: any){
        return body;
    }

}