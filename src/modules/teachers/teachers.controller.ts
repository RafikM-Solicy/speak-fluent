import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dtos/create-teacher.dto';

@Controller('teachers')
export class TeachersController {
  constructor(
    private readonly teachersService: TeachersService
    ) {}

  @Post('register')
  @UsePipes(new ValidationPipe())
  async register(@Body() createTeacherDto: CreateTeacherDto) {
    const teacher = await this.teachersService.create(createTeacherDto);
    return { message: 'Teacher registered successfully', teacher };
  }
}
