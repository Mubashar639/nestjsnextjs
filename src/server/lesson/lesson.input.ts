import { Field, InputType, Int } from '@nestjs/graphql';
import { IsDateString, MinLength } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(1)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;

  @Field(() => [Int], { defaultValue: [] })
  students: number[];
}
