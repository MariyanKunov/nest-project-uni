import { Body, Controller, Get, Post } from '@nestjs/common';
import { UniversityService } from './university.service';

@Controller('university')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

    @Get()
    getStudents(){
        return this.universityService.findAll();
    }

    @Post()
    createStudent(@Body() universityDto){
        return this.universityService.createStudent(universityDto);
    }

}