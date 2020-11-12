import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(user: UserDto): Promise<User> {
    return this.userModel.create<User>(user);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll<User>({});
  }

  async findOne(id): Promise<User> {
    return this.userModel.findOne({
      where: { id },
    });
  }

  async delete(id) {
    return this.userModel.destroy({ where: { id } });
  }

  async update(id, data) {
    const [numberOfAffectedRows, [updatedUser]] = await this.userModel.update(
      { ...data },
      { where: { id }, returning: true },
    );

    return { numberOfAffectedRows, updatedUser };
  }
}
