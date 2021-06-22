import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
  @Field()
  id: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}