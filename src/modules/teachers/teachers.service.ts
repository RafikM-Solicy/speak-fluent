import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teachers } from './teachers.entity';
import { CreateTeacherDto } from './dtos/create-teacher.dto';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teachers)
    private readonly teachersRepository: Repository<Teachers>,
  ) {}

  async create(createTeacherDto: CreateTeacherDto): Promise<Teachers> {
    const { name, email, password } = createTeacherDto;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const teacher = this.teachersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return this.teachersRepository.save(teacher);
  }

  async findOneByEmail(email: string): Promise<Teachers | undefined> {
    return this.teachersRepository.findOne({ where: { email } });
  }
}
