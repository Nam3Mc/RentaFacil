import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/CreateUser.dto.js';
import { ApiBody } from '@nestjs/swagger';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe.js';
import { CreateUserSchema } from 'src/user/schemas/create-user.schema.js';
import { UserService } from 'src/user/user.service.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiBody({type: CreateUserDto})
  @UsePipes( new ZodValidationPipe( CreateUserSchema))
  singUp(@Body() body: CreateUserDto) {
    return this.userService.create(body)
  }

  @Get()
  signIn() {
    return this.authService.findAll();
  }

}
