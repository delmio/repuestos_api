import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { ProfileService } from '../services/profile.service';
import { Console } from 'console';

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

        await this.usersService.findOneByRut(body.run).then((responseFindUser)=>{

            if(responseFindUser != null || responseFindUser != undefined){

                resp.status = 500;
                resp.error = 'duplicated user';

            }else{

                this.usersService.create(body).then((responseUser)=>{
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
                });

            }

        }).catch((err)=>{

            resp.status = 500;
            resp.error = err;

        });

        return resp;

    }

    @Put()
    async update(@Body() body: any){

        await this.usersService.updateUser(body).then((responseUserUpdated)=>{

            resp.ok = true;
            resp.status = 200;
            resp.result = responseUserUpdated;

        }).catch((err)=>{

            resp.status = 500;
            resp.error = err;

        });

       return resp;
    }

    @Delete('/byId')
    deleteById(@Body() body: any){
        return body;
    }

}