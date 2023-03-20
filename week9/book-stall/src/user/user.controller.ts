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
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import * as IP from 'ip';
import axios from 'axios';

//// getting the details of ipaddress
const URL =
  'https://ipgeolocation.abstractapi.com/v1/?api_key=a34cbe677760452c9f0e5ea77d4b867f';
const sendAPIRequest = async (ipAddress) => {
  const apiResponse = await axios.get(URL + '&ip_address=' + ipAddress);
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
  @Post('create')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    /// getch the IP
    const ipAddress = IP.address();

    /// calling the ipgeolocation api
    const ipAddressInformation = await sendAPIRequest(ipAddress);
    console.log(ipAddressInformation);

    return this.userService.createUser(createUserDto);
  }

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Get('all')
  @UseGuards(AuthGuard('jwt'))
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
