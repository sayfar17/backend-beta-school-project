import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Grade } from './grade.entity';
import { Assignment } from './assignment.entity';

@Entity('secciones')
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'grado_id' })
  grado_id: number;

  @Column({ type: 'char', length: 1 })
  letra: string; // 'A', 'B', etc.

  @ManyToOne(() => Grade, grade => grade.sections)
  @JoinColumn({ name: 'grado_id' })
  grade: Grade;

  @OneToMany(() => Assignment, assignment => assignment.section)
  assignments: Assignment[];
}
