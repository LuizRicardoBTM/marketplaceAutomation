import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() userDTO: UserDTO): Promise<string> {
    this.userService.createUser(userDTO);
    await Promise.resolve();
    return 'User created successfully';
  }

  @Get('find')
  async findUser(): Promise<UserDTO[]> {
    await Promise.resolve();
    return this.userService.findUser();
  }

  @Get('find/:id')
  async findUserById(@Body('id') id: number): Promise<UserDTO | undefined> {
    await Promise.resolve();
    return this.userService.findUserById(id);
  }
}
