import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './user/user.module';
import { prismaModule } from './prisma/prisma.module';

@Module({
  imports: [userModule, prismaModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule {}
