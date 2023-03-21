import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encrypt } from 'src/common/helper/encryption.helper';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  createUser(createUserDto: CreateUserDto): Promise<User> {
    //// fetching the country
    let country: string;
    const axios = require('axios');
    axios
      .get(
        'https://ipgeolocation.abstractapi.com/v1/?api_key=a34cbe677760452c9f0e5ea77d4b867f',
      )
      .then((response) => {
        country = response.country;
      })
      .catch((error) => {
        console.log(error);
      });

    /// encoding password
    const hashPassword = encrypt(createUserDto.password);

    /// creating a user object to store in DB
    const user: User = new User();
    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.country = country;
    user.phoneNumber = createUserDto.phoneNumber;
    user.role = createUserDto.role;
    user.password = hashPassword;

    return this.repository.save(user).then((value) => {
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
