import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll() {
    // get all users in the db
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    // find the user with this id
    const user = await this.userService.findOne(id);

    // if the user doesn't exit in the db, throw a 404 error
    if (!user) {
      throw new NotFoundException("This User doesn't exist");
    }

    // if user exist, return the user
    return user;
  }

  @Post()
  async create(@Body() user: UserDto): Promise<User> {
    // create a new user and return the newly created user
    return await this.userService.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: UserDto): Promise<User> {
    // get the number of row affected and the updated user
    const { numberOfAffectedRows, updatedUser } = await this.userService.update(
      id,
      user,
    );

    // if the number of row affected is zero,
    // it means the user doesn't exist in our db
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This User doesn't exist");
    }

    // return the updated user
    return updatedUser;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    // delete the user with this id
    const deleted = await this.userService.delete(id);

    // if the number of row affected is zero,
    // then the user doesn't exist in our db
    if (deleted === 0) {
      throw new NotFoundException("This User doesn't exist");
    }

    // return success message
    return 'Successfully deleted';
  }
}
