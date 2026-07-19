import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Section } from './section.entity';

@Entity('grados')
export class Grade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'Secundaria' })
  nivel: string;

  @Column()
  nombre: string; // '1ro', '2do', etc.

  @OneToMany(() => Section, section => section.grade)
  sections: Section[];
}
