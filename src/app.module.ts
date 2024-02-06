import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from '../db/ormconfig';
import { TeachersModule } from './modules/teachers/teachers.module';
import { StudentsModule } from './modules/students/students.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    TeachersModule,
    StudentsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
