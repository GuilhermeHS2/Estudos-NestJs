import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { userController } from "./user.controller";
import { UserService } from "./user.service";
import { prismaModule } from "src/prisma/prisma.module";
import { UserIdChckMiddeleware } from "src/middlewares/user-id-check.middlewares";

@Module({
    imports: [prismaModule],
    controllers: [userController],
    providers: [UserService],
    exports: []
})
export class userModule implements NestModule {

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserIdChckMiddeleware).forRoutes({
            path: 'users/:id',
            method: RequestMethod.ALL
        });
    }
}