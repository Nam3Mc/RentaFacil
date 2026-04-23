import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Changes')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('properties')
  getHello(): string {
    let a = 100
    return a.toString()
  }
}
