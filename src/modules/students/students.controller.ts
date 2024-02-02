import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get("")
  get(){
    return "sst"
  }
 
}
