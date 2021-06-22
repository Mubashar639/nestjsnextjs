import { Field, Int, ObjectType } from '@nestjs/graphql';
import { StudentType } from '../student/student.type';

@ObjectType('Lesson')
export class LessonType {
  @Field((type) => Int)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field((type) => [StudentType])
  students: number[];
}
