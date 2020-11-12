import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  async getAccessToken(@Query('code') code: string) {
    return await this.authService.getAccessToken(code);
  }
}
