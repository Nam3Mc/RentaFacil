import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserSchema } from './schemas/create-user.schema.js';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe.js';
import { updateUserSchema } from './schemas/update-user.schema.js';
import { ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/CreateUser.dto.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiBody({type: CreateUserDto})
  @UsePipes( new ZodValidationPipe( CreateUserSchema))
  create(@Body() body: CreateUserDto) {
    return this.userService.create(body)
  }

  // @Get()
  // findAll() {
    // return this.userService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @UsePipes(new ZodValidationPipe(updateUserSchema))
  update(@Body() body) {
    return body
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
    // return this.userService.remove(+id);
  // }
} 
