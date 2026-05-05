import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './schemas/create-user.schema.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { HashPassword } from '../common/utils/hash.util.js';
import { uuid } from 'zod';
import { threadCpuUsage } from 'node:process';


@Injectable()
export class UserService {

  constructor (
    private prisma: PrismaService
    
  ) {}

  async create( data: CreateUserDto) {
    const thereIsUser = await this.findByEmail(data.email)
    if (!thereIsUser) {
      const password =  await HashPassword(data.password)
      const newUser = await this.prisma.user.create({   
        data: {
          fname: data.fname,
          lname:        data.lname,
          email:        data.email,
          passwordHash : password,
          role:         data.role,
        }
      })
      const {passwordHash: _, ...userWIthoutPassword} = newUser
      return userWIthoutPassword
    }
    else {
      throw new BadRequestException('Thre is already an account associated with that email' )
    }
  }

  async findAll() {
    return await this.prisma.user.findMany({
      select: {
        fname:true,
        lname: true,
        email: true,
        phone: true,
        user_id: true,
      }
    })
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { user_id: id }, 
      select: {
        fname:true,
        lname: true,
        email: true,
        phone: true,
        user_id: true
      }
    })
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {email: email}
    })
    return user
  }

  update() {
    return `This action updates a user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
