import { UsesrController } from './users.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { usersProviders } from './users.providers';
import { UsersService } from './users.service';

@Module({
  controllers: [UsesrController],
  imports: [DatabaseModule],
  providers: [...usersProviders, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
