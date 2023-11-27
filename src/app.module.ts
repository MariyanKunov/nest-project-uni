import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { UniversityModule } from './university/university.module';

@Module({
  imports: [StudentModule, UniversityModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
