import { Field, Int, InputType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class AssignStudentsToLessonInput {
  @Field()
  lessonId: number;

  @Field(() => [Int])
  studentIds: number[];
}
