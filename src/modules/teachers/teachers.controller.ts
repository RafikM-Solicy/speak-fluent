import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TeachersService } from './teachers.service';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly TeachersService: TeachersService) {}

  @Get()
  get(){
    return "st"
  }
}
