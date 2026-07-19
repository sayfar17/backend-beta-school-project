import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, IsOptional, IsInt, IsEnum } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  dni!: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nombres!: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  apellidos!: string;

  @ApiProperty({ required: false })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password_hash!: string;

  @ApiProperty()
  @IsInt()
  rol_id!: number;

  @ApiProperty({ enum: ['ACTIVO', 'INACTIVO'], default: 'ACTIVO' })
  @IsEnum(['ACTIVO', 'INACTIVO'])
  @IsOptional()
  estado?: string;
}
