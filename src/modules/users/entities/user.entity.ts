import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../roles/entities/role.entity'; // si tienes módulo de roles, o puedes referenciar solo id

@Entity('usuarios')
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ unique: true })
  dni: string;

  @ApiProperty()
  @Column()
  nombres: string;

  @ApiProperty()
  @Column()
  apellidos: string;

  @ApiProperty()
  @Column({ nullable: true, unique: true })
  email: string;

  @Column()
  password_hash: string;

  @ApiProperty()
  @Column({ name: 'rol_id' })
  rol_id: number;

  @ApiProperty({ enum: ['ACTIVO', 'INACTIVO'] })
  @Column({ default: 'ACTIVO' })
  estado: string;

  @CreateDateColumn({ name: 'creado_en' })
  creado_en: Date;

  @UpdateDateColumn({ name: 'actualizado_en' })
  actualizado_en: Date;
}
