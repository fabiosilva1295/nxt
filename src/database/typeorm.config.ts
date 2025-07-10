import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { entities } from './entities.index';

const  configService = new ConfigService();
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port:  configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USERNAME'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  entities,
  synchronize: configService.get('DATABASE_SYNCHRONIZE'), 
};
