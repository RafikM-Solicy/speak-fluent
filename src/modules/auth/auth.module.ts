import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { StudentGuard } from './guards/students.guard';
import { TeacherGuard } from './guards/teachers.guard';
import { TeachersModule } from '../teachers/teachers.module';
import { StudentsModule } from '../students/students.module';

@Module({
  imports: [
    PassportModule,
    StudentsModule,
    TeachersModule,
    JwtModule.register({
      secret: 'your_secret_key',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService, JwtStrategy, StudentGuard, TeacherGuard],
  controllers: [AuthController],
})
export class AuthModule {}
