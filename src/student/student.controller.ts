import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudents(){
        return this.studentService.findAll();
    }

    @Post()
    createStudent(@Body() studentDto){
        return this.studentService.createStudent(studentDto);
    }

}