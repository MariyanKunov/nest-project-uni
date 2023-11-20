import { DataSource } from 'typeorm';
import { Student } from './sudent.entity';

export const studentProvider = [
  {
    provide: 'STUDENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Student),
    inject: ['DATA_SOURCE'],
  },
];
