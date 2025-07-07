import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'src/common/entities/address.entity';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [
    UserController,
  ],
  imports: [
    TypeOrmModule.forFeature([User, Address])
  ],
  providers: [
    UserService
  ],
  exports:[
    UserService
  ]
})
export class UserModule {}
