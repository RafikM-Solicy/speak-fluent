import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { StudentsService } from '../students/students.service';
import { TeachersService } from '../teachers/teachers.service';


@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private studentsService: StudentsService,
    private teachersService: TeachersService,
  ) {}

  private async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  async login(user: any) {
    return this.jwtService.sign(user)
  }

  async validateUser(email: string, password: string, role: 'student' | 'teacher'): Promise<any> {
    if (role === 'student') {
      const student = await this.studentsService.findOneByEmail(email);

      if (student && (await this.comparePasswords(password, student.password))) {
        const { password, ...result } = student;
        return { ...result, role: 'student' };
      }
    } else if (role === 'teacher') {
      const teacher = await this.teachersService.findOneByEmail(email);

      if (teacher && (await this.comparePasswords(password, teacher.password))) {
        const { password, ...result } = teacher;
        return { ...result, role: 'teacher' };
      }
    }

    return null;
  }
}
