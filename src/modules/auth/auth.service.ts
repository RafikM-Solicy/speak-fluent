import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TeachersService } from '../teachers/teachers.service';
import { StudentsService } from '../students/students.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private teachersService: TeachersService,
    private studentsService: StudentsService,
  ) {}

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId, role: user.role };
    console.log(payload)
    return {
      access_token: this.jwtService.sign(payload),
    };
  }



  async validateUser(payload: any) {
    // Implement your user validation logic (fetch user from the database, etc.)
    // Return the user if valid, otherwise return null.
  }
}
