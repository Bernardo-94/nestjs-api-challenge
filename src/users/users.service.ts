import { Injectable, Inject } from '@nestjs/common';
import { ResultsDto } from 'src/dto/result.dto';
import { Repository } from 'typeorm';
import { UsersRegisterDto } from './dto/users.register.dto';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async findOne(email: string): Promise<Users | undefined> {
    return this.usersRepository.findOne({ where: { email: email } });
  }

  async register(data: UsersRegisterDto): Promise<ResultsDto> {
    // eslint-disable-next-line prefer-const
    let user = new Users();
    user.email = data.email;
    user.password = data.password;
    return this.usersRepository
      .save(user)
      .then((result) => {
        return <ResultsDto>{
          status: true,
          message: 'Usuário cadastrado com sucesso!',
        };
      })
      .catch((error) => {
        return <ResultsDto>{
          status: false,
          message: 'Houve um erro ao cadastrar o usuário',
        };
      });
  }
}
