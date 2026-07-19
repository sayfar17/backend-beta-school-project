import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { Grade } from './entities/grade.entity';
import { Section } from './entities/section.entity';
import { Course } from './entities/course.entity';
import { Assignment } from './entities/assignment.entity';
import { TeachersModule } from '../teachers/teachers.module';

@Module({
  imports: [TypeOrmModule.forFeature([Grade, Section, Course, Assignment]), TeachersModule],
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
