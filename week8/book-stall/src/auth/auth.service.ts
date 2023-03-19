import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { constants } from 'src/common/helper/constants';
import { UserService } from 'src/user/user.service';
import * as CryptoJS from 'crypto-js';
import { use } from 'passport';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);

    console.log(user);
    /// decoding password using AES
    const hashPassword = CryptoJS.AES.decrypt(user.password, constants.secret);

    // console.log(hashPassword);
    // console.log(hashPassword.toString());
    // console.log(hashPassword.toString(CryptoJS.enc.Utf8));

    if (user && hashPassword.toString(CryptoJS.enc.Utf8) === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, password: user.password };
    return {
      access_token: await this.jwtService.signAsync(payload),
      id: user.uid,
    };
  }
}
