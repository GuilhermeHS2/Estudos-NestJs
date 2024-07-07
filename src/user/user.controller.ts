import { Body, Controller, Post, Get, Param, Put, Patch, Delete, ParseIntPipe, ParseEnumPipe } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class userController {

    constructor(private readonly userService: UserService) {}

    @Post()
    async create(@Body() data: CreateUserDTO) {
        return this.userService.create(data);
    }

    @Get()
    async list() {
        return this.userService.list();
    }
    @Get(':id')
    async show(@Param('id', ParseIntPipe) id:number) {
        return this.userService.show(id);
    }

    @Put(':id') //alteracao total
    async update(@Body() {name, email, password}:UpdatePutUserDTO, @Param('id', ParseIntPipe) id:number ) {
        return {
            method: 'Put',
            name,
            email,
            password,
            id  
        }
    }

    @Patch(':id') //alteracao parcial
    async updatePartial(@Body() {name, email, password}: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id:number){
        return {
            method: 'Patch',
            name,
            email,
            password, 
            id
            
        }
    }
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return {
            id
        }
    }
}