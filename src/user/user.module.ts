import { Module } from "@nestjs/common";
import { userController } from "./user.controller";
import { UserService } from "./user.service";
import { prismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [prismaModule],
    controllers: [userController],
    providers: [UserService],
    exports: []
})
export class userModule {}