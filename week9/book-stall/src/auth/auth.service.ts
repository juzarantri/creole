import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { constants } from 'src/common/helper/constants';
import { UserService } from 'src/user/user.service';
import { decrypt } from 'src/common/helper/encryption.helper';
import { use } from 'passport';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);

    /// decoding password using AES
    const originalPassword = decrypt(user.password);

    if (user && originalPassword === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log(user);
    const payload = { username: user.username, password: user.password };
    return {
      access_token: await this.jwtService.signAsync(payload),
      id: user.uid,
      role: user.role,
    };
  }
}
