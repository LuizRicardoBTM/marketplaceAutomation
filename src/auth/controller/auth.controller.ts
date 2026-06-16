import {
  Body,
  Controller,
  Post,
  Request,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { authGuard } from '../auth.guard';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDTO: Record<string, any>) {
    return this.authService.signIn(signInDTO.userName, signInDTO.password);
  }

  @UseGuards(authGuard)
  @Get('profile')
  getProfile(@Request() req: { user: string }) {
    return req.user;
  }
}
