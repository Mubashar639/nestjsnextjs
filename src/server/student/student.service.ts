import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async getStudent(id: number): Promise<Student> {
    return this.studentRepository.findOne({ id });
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async searchStudents(name: string): Promise<Student[]> {
    return this.studentRepository
      .createQueryBuilder('user')
      .where('user.firstName like :fname', { fname: `%${name}%` })
      .orWhere('user.lastName like :lname', { lname: `%${name}%` })
      .getMany();
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;

    const student = this.studentRepository.create({
      firstName,
      lastName,
    });

    return this.studentRepository.save(student);
  }

  async getManyStudents(studentIds: number[]): Promise<Student[]> {
    if (!studentIds.length) {
      return [];
    }
    return this.studentRepository
      .createQueryBuilder('data')
      .where('data.id IN (:...studentIds)', { studentIds })
      .getMany();
  }
}
