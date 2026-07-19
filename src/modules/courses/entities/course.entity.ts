import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Assignment } from './assignment.entity';

@Entity('cursos')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true, type: 'text' })
  descripcion: string;

  @OneToMany(() => Assignment, assignment => assignment.course)
  assignments: Assignment[];
}
