import { MaxLength } from 'class-validator';

export class UserDto {
  @MaxLength(100)
  firstName: string;

  @MaxLength(100)
  lastName: string;

  isActive: boolean;
}
