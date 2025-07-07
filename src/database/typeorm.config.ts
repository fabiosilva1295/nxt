import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { entities } from './entities.index';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST, 
  port:  Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities,
  synchronize: true, // ⚠️ usar apenas em desenvolvimento
};
