import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { StudentGuard } from './guards/students.guard';
import { TeacherGuard } from './guards/teachers.guard';
import { Roles } from './roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body) {
    return this.authService.login(body);
  }

  @Post('student-protected')
  @UseGuards(StudentGuard)
  @Roles('student')
  async studentProtected(@Request() req) {
    console.log('User in Student Protected Controller:', req.user);
    return 'Student Route';
  }

  @Post('teacher-protected')
  @UseGuards(TeacherGuard)
  @Roles('teacher')
  async teacherProtected() {
    return 'Teacher Route';
  }
}
