require('dotenv').config();
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { StudentGuard } from './guards/students.guard';
import { TeacherGuard } from './guards/teachers.guard';
import { JwtExpiration } from './constants/auth.enum';
import { StudentsModule } from '../students/students.module';
import { TeachersModule } from '../teachers/teachers.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: JwtExpiration.OneDay },
    }),
    StudentsModule,
    TeachersModule,
  ],
  providers: [
    AuthService,
    JwtStrategy,
    StudentGuard,
    TeacherGuard
  ],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
