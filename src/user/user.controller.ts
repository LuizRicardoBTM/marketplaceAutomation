import { Body, Controller, Post, Get, Res, HttpStatus } from '@nestjs/common';
import type { Response } from 'express';
import { UserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  createUser(@Body() userDTO: UserDTO, @Res() res: Response) {
    this.userService.createUser(userDTO);
    res.status(HttpStatus.CREATED).send();
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
