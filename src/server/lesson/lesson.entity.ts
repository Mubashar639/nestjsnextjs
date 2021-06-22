import {
  Entity,
  PrimaryColumn,
  Column,
  ObjectIdColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column('int', { array: true, default: {} })
  students: number[];
}
