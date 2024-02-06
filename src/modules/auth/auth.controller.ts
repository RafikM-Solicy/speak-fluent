import { Controller, Post, UseGuards, Request, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { StudentGuard } from './guards/students.guard';
import { TeacherGuard } from './guards/teachers.guard';
import { Roles } from './roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UsePipes(new ValidationPipe())
  async login(@Body() credentials: { email: string; password: string; role: 'student' | 'teacher' }) {
    const user = await this.authService.validateUser(
      credentials.email,
      credentials.password,
      credentials.role,
    );

    if (!user) {
      return { message: 'Invalid credentials' };
    }

    const payload = {
      username: user.name,
      sub: user.id,
      role: user.role,
    };

    return {
      access_token: await this.authService.login(payload),
    };
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
