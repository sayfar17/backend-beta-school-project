import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Teacher } from '../../teachers/entities/teacher.entity';
import { Course } from './course.entity';
import { Section } from './section.entity';
import { AcademicYear } from '../../academic-years/entities/academic-year.entity'; // opcional

@Entity('asignaciones_docentes')
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'docente_id' })
  docente_id: number;

  @Column({ name: 'curso_id' })
  curso_id: number;

  @Column({ name: 'seccion_id' })
  seccion_id: number;

  @Column({ name: 'anio_escolar_id' })
  anio_escolar_id: number;

  @ManyToOne(() => Teacher)
  @JoinColumn({ name: 'docente_id' })
  teacher: Teacher;

  @ManyToOne(() => Course)
  @JoinColumn({ name: 'curso_id' })
  course: Course;

  @ManyToOne(() => Section)
  @JoinColumn({ name: 'seccion_id' })
  section: Section;
}
