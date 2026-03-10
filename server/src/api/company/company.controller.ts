import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CompanyService } from './company.service';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('company')
export class CompanyController {
  constructor(private readonly comapanyService: CompanyService) {}

  @Post('singup')
  async create(@Body() data: any): Promise<any> {
    const company = await this.comapanyService.createCompany(data);

    return {
      company,
    };
  }

  @Get('profile-comapany')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('company')
  async getDashboard(@Req() req) {
    const userId = req.user.sub;
    console.log(userId);
    return this.comapanyService.getInfo(userId);
  }
}
