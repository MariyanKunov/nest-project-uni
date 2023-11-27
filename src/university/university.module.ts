
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../db/db.module';
import { universityProvider } from './university-providers';
import { UniversityService } from './university.service';
import { UniversityController } from './university.controller';
@Module({
  imports: [DatabaseModule],
  providers: [
    ...universityProvider,
    UniversityService,
    UniversityController
  ],
  controllers: [UniversityController],
})
export class UniversityModule {}
