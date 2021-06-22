import * as path from 'path';
const isDevelopment = process.env.NODE_ENV !== 'production';
const rootDir = isDevelopment ? 'src' : 'dist/src';
const ssl = isDevelopment ? false : { rejectUnauthorized: false };

module.exports = [
  {
    cli: {
      migrationsDir: 'src/server/database/migrations',
    },
    entities: [path.join(__dirname, '**/**/*.entity{.ts,.js}')],
    migrations: [
      path.join(__dirname, rootDir, 'server/database/migrations/*{.ts,.js}'),
    ],
    name: 'default',
    ssl,
    type: 'postgres',
    url: 'postgres://postgres:asdf1345678@127.0.0.1:5432/aliali',
  },
  {
    cli: {
      migrationsDir: 'src/server/database/seed',
    },
    entities: [
      path.join(__dirname, 'src', '**/**/*.entity{.ts,.js}'),
      path.join(__dirname, 'libs', 'auth', 'src', '**/**/*.entity{.ts,.js}'),
    ],
    migrations: [path.join(__dirname, rootDir, 'database/seed/*{.ts,.js}')],
    name: 'seed',
    ssl,
    type: 'postgres',
    url: 'postgres://postgres:asdf1345678@127.0.0.1:5432/aliali',
  },
];
