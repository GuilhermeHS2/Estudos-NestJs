import { Body, Controller, Post, Get,  Put, Patch, Delete, ParseIntPipe, ParseEnumPipe, UseInterceptors } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";
import { LogInterceptor } from "src/interceptors/log.interceptor";
import { ParamId } from "src/decorators/param-id.decorator";
@UseInterceptors(LogInterceptor)
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
    async show(@ParamId() id: number) {
        return this.userService.show(id);
    }

    @Put(':id') //alteracao total
    async update(@Body() data: UpdatePutUserDTO, @ParamId() id:number ) {
    return this.userService.update(id, data);
        
    }

    @Patch(':id') //alteracao parcial
    async updatePartial(@Body() data: UpdatePatchUserDTO, @ParamId() id:number){
        return this.userService.updatePartial(id, data);
    }
    @Delete(':id')
    async delete(@ParamId() id: number) {
        
        return this.userService.delete(id);
    }
}