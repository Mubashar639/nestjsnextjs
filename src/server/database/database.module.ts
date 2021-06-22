import { Module } from '@nestjs/common';
import * as path from 'path';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

export const DB_CONNECTION = 'DB_CONNECTION';

@Module({
  exports: [DB_CONNECTION],
  imports: [ConfigModule],

  providers: [
    {
      inject: [ConfigService],
      provide: DB_CONNECTION,
      useFactory: (configService: ConfigService) => ({
        ...require('../../../ormconfig')[0],
        migrations: [path.join(__dirname, 'migrations')],
        url: configService.DATABASE_URL,
      }),
    },
  ],
})
export class DatabaseModule {}
