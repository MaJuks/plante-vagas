import { Roles } from 'src/common/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserService } from './users.service';

import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async create(@Body() data: any): Promise<any> {
    const { userData } = data;
    const user = await this.userService.createUser(userData);

    return {
      user,
    };
  }

  @Get()
  async getUsers() {
    return this.userService.findAll();
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('candidate')
  async getDashboard(@Req() req) {
    const userId = req.user.sub;
    console.log(userId);
    return this.userService.getInfo(userId);
  }
}
