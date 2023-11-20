
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from './sudent.entity';

@Injectable()
export class StudentService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async createStudent(studentDto: any){
        return this.studentRepository.save(studentDto);
  }
}
