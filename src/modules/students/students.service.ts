import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
    private usersService: UsersService,
  ) {}

  async findAll(): Promise<Student[]> {
    return this.studentsRepository.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<Student> {
    const student = await this.studentsRepository.findOne({ where: { id }, relations: ['user'] });
    if (!student) throw new NotFoundException('Estudiante no encontrado');
    return student;
  }

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    // Se asume que el usuario ya fue creado, o se puede crear junto.
    const student = this.studentsRepository.create(createStudentDto);
    return this.studentsRepository.save(student);
  }

  async remove(id: number): Promise<void> {
    await this.studentsRepository.delete(id);
  }
}
