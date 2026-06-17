import { Body, Controller, Post, Get, Res, HttpStatus } from '@nestjs/common';
import type { Response } from 'express';
import { User } from '../interface/user.entity';
import { UserService } from '../service/user.service';
import { Public } from '../../auth/auth.metadata';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post('create')
  async createUser(@Body() user: User, @Res() res: Response): Promise<void> {
    await this.userService.create(user);
    res.status(HttpStatus.CREATED).send();
  }

  @Get('find')
  async findUser(): Promise<User[]> {
    return await this.userService.findAllUsers();
  }

  @Get('find/:id')
  async findUserById(@Body('id') id: number): Promise<User | null> {
    return await this.userService.findUserById(id);
  }
}
