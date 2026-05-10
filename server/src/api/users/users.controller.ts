import { Roles } from 'src/common/decorators/roles.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserService } from './users.service';

import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { use } from 'passport';
import { CreateUserDTO } from './dto/create-user-dto';
import { UpdateUserDTO } from './dto/update-user-deto';

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

   @Patch('update')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('candidate')
    async update(@Req() req: any, @Body() UpdateUserDTO: UpdateUserDTO ) {
      const userID = req.user.sub;
      return this.userService.update(userID, UpdateUserDTO)
    }

@Delete('delete/:id')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('candidate')
async deleteUser(@Req() req){
  const userId = req.user.sub
  return this.userService.delete(userId);
}

}
