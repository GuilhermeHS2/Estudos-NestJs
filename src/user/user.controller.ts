import { Body, Controller, Post, Get, Param, Put, Patch, Delete } from "@nestjs/common";

@Controller('users')
export class userController {
    @Post()
    async create(@Body() body) {
        return {body};
    }

    @Get()
    async list() {
        return {users: []}
    }
    @Get(':id')
    async show(@Param() params) {
        return {user: {}, params}
    }

    @Put(':id') //alteracao total
    async update(@Body() body, @Param() params) {
        return {
            method: 'Put',
            body,
            params  
        }
    }

    @Patch(':id') //alteracao parcial
    async updatePartial(@Body() body, @Param() params){
        return {
            method: 'Patch',
            body, 
            params
            
        }
    }
    @Delete(':id')
    async delete(@Param() params) {
        return {
            params
        }
    }
}