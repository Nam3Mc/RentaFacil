import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './schemas/create-user.schema.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { HashPassword } from '../common/utils/hash.util.js';


@Injectable()
export class UserService {

  constructor (private prisma: PrismaService) {}

  async create( data: CreateUserDto) {
    const password = await HashPassword(data.password)
    return password
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update() {
    return `This action updates a user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
