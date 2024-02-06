require('dotenv').config();
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Students } from './students.entity';
import { CreateStudentDto } from './dtos/create-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Students)
    private readonly studentsRepository: Repository<Students>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Students> {
    const { name, email, password } = createStudentDto;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const student = this.studentsRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return this.studentsRepository.save(student);
  }

  async findOneByEmail(email: string): Promise<Students | undefined> {
    return this.studentsRepository.findOne({ where: { email } });
  }
}
