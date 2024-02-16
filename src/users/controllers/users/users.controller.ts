import { Body, Controller, Get, Post } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { name: 'Nandu', age: 22 };
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        name: 'test',
      },
    ];
  }

  @Post('create')
  createUser(@Body() userData:CreateUserDto) {
  console.log(userData.email)
  return userData
  }
}
