import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { ProfileService } from '../services/profile.service';

var resp = {
    ok: false,
    error: null,
    status: null,
    result: null
}

@Controller('api/users')
export class UsersController {

    constructor(
        private usersService: UsersService,
        private profileService: ProfileService
    ) {}

    @Get()
    async getAll(){

        await this.usersService.findAll().then((r)=>{
            resp.result = r;
            resp.status = 200;
            resp.ok = true;
        }).catch((err)=>{
            resp.status = 500;
            resp.error = err;
        })

        return resp;
  
    }

    @Post()
    async create(@Body() body: any){

        await this.usersService.create(body).then((responseUser)=>{
            this.profileService.create(responseUser.id, body.perfiles.administrador).then((responseProfile)=>{
                resp.result = responseUser;
                resp.status = 200;
                resp.ok = true;
            }).catch((err)=>{
                resp.status = 500;
                resp.error = err;
            })
        }).catch((err)=>{
            resp.status = 500;
            resp.error = err;
        })

        return resp;

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