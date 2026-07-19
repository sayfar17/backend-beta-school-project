import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';
// import { Parent } from '../../parents/entities/parent.entity'; // opcional

@Entity('alumnos')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'usuario_id' })
  user: User;

  @Column({ name: 'usuario_id' })
  usuario_id: number;

  @Column({ name: 'apoderado_id', nullable: true })
  apoderado_id?: number;

  @Column({ name: 'codigo_estudiante', nullable: true, unique: true })
  codigo_estudiante?: string;

  @Column({ name: 'fecha_nacimiento', nullable: true, type: 'date' })
  fecha_nacimiento?: Date;
}
