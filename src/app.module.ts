import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module.js';
import { UserController } from './user/user.controller.js';
import { UserService } from './user/user.service.js';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
