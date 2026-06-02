import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private readonly users: UserDTO[] = [];

  createUser(userDTO: UserDTO) {
    this.users.push(userDTO);
  }

  findUser(): UserDTO[] {
    return this.users;
  }

  findUserById(id: number): UserDTO | undefined {
    return this.users.find((user) => user.id === id);
  }
}
