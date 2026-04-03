import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { CurriculumService } from './curriculum.service';
import { CreateCurriculumDto } from './dto/create-curriculum.dto';
import { UpdateCurriculumDto } from './dto/update-curriculum.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { use } from 'passport';

@Controller('curriculum')
export class CurriculumController {
  constructor(private readonly curriculumService: CurriculumService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('candidate')
  async create(@Body() createCurriculumDto: CreateCurriculumDto, @Req() req) {
    const userId = req.user.sub;
    console.log(userId);
    return this.curriculumService.create(createCurriculumDto, userId);
  }

  @Get('find/all')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('candidate')
  findAll() {
    return this.curriculumService.findAll();
  }
ß
  @Get('find/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('candidate')
  async findOne(@Req() req: any) {
    const userId = req.user.sub;
    return this.curriculumService.findOne( userId);
  }

  @Patch('update')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('candidate')
  async update(@Req() req: any, @Body() CreateCurriculumDto: CreateCurriculumDto) {
    const userID = req.user.sub;
    return this.curriculumService.update(userID, CreateCurriculumDto);
  }

  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('candidate')
  remove(@Param('id') id:string , @Req() req) {
    const userId = req.user.sub;
    return this.curriculumService.remove(Number(id),userId);
  }
}
