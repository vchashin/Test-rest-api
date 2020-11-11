import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers(): any {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() userData) {
    return this.userService.create(userData);
  }
}
