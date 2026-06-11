import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }

  findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  findUserById(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  findUserByName(name: string): Promise<User | null> {
    return this.userRepository.findOneBy({ name });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete({ id });
  }
}
