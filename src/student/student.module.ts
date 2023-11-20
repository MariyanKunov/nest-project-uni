
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../db/db.module';
import { studentProvider } from './student-providers';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
@Module({
  imports: [DatabaseModule],
  providers: [
    ...studentProvider,
    StudentService,
    StudentController
  ],
  controllers: [StudentController],
})
export class StudentModule {}
