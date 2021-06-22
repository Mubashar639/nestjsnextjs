import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((returns) => StudentType)
  async student(@Args('id') id: number) {
    return this.studentService.getStudent(id);
  }

  @Query((returns) => [StudentType])
  async students() {
    try {
      return this.studentService.getStudents();
    } catch (err) {
      console.log(err);
    }
  }

  @Query((returns) => [StudentType])
  async searchStudents(@Args('name') name: string) {
    try {
      return this.studentService.searchStudents(name);
    } catch (err) {
      console.log(err);
    }
  }

  @Mutation((returns) => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
