import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/User';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'gom',
      password: 'abc1234',
    },
    {
      username: 'kyle',
      password: 'abc1234',
    },
    {
      username: 'aiden',
      password: 'abc1234',
    },
    {
      username: 'grady',
      password: 'abc1234',
    },
  ];

  getUsers() {
    return this.users.map((user) => plainToC`lass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
