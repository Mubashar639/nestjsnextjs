import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { LessonModule } from './lesson/lesson.module';
import { StudentModule } from './student/student.module';
import { loggerMiddleware } from './utls/QraphQlLogger';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'asdf1345678',
      database: 'aliali',
      entities: [path.join(__dirname, '**/*.entity{.ts,.js}')],
      synchronize: false,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      buildSchemaOptions: {
        fieldMiddleware: [loggerMiddleware],
      },
    }),
    LessonModule,
    StudentModule,
  ],
})
export class AppModule {}
