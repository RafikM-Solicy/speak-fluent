import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Teachers } from './teachers.entity';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teachers)
    private readonly teachersRepository: Repository<Teachers>,
  ) {}
}
