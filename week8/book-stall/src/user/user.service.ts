import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as CryptoJS from 'crypto-js';
import { constants } from 'src/common/helper/constants';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.username = createUserDto.username;
    user.email = createUserDto.email;

    /// encoding password using AES
    const hashPassword = CryptoJS.AES.encrypt(
      createUserDto.password,
      constants.secret,
    );
    user.password = hashPassword.toString();

    return this.repository.save(user).then((value) => {
      // console.log(typeof value);
      delete value.password;
      return value;
    });
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(username: string) {
    return this.repository.findOne({
      where: {
        username: username,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
