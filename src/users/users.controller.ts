import { ResultsDto } from './../dto/result.dto';
import { UsersRegisterDto } from './dto/users.register.dto';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Users } from './users.entity';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsesrController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async listar(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Post('register')
  async register(@Body() data: UsersRegisterDto): Promise<ResultsDto> {
    return this.usersService.register(data);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}
