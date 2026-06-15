import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../user/service/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(
    userName: string,
    userPassword: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.findUserByName(userName);
    if (user?.password !== userPassword) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, userName: user.name };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
