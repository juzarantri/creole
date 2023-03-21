import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  BadRequestException,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import * as IP from 'ip';
import axios from 'axios';
import { Roles } from 'src/shared/decorators/roles.decorators';
import { Role } from 'src/common/helper/constants';
import { RolesGuards } from 'src/shared/guards/roles.guard';

//// getting the details of ipaddress
const URL =
  'https://ipgeolocation.abstractapi.com/v1/?api_key=a34cbe677760452c9f0e5ea77d4b867f';
const sendAPIRequest = async (ipAddress) => {
  // const apiResponse = await axios.get(URL + '&ip_address=' + ipAddress);
  const apiResponse = await axios.get(URL);
  return apiResponse.data;
};

@Controller('user')
export class UserController {
  /// injecting UserService & AuthService
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  //// registering new user
  @Post('register')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    /// getch the IP
    // const ipAddress = IP.address();

    /// calling the ipgeolocation api
    // const ipAddressInformation = await sendAPIRequest(ipAddress);
    // console.log(ipAddressInformation);
    // return;

    try {
      return await this.userService.createUser(createUserDto);
    } catch (e) {
      const error = e.detail;
      const { ...result } = error?.match(/\(.*?\)/g);
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        message: `${result[0]} => ${result[1]} already exits`,
      });
    }
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Get('all')
  @UseGuards(AuthGuard('jwt'))
  @UseGuards(RolesGuards)
  @Roles(Role.ADMIN)
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
