import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { VagaService } from './vaga.service';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { UpdateVagaDto } from './dto/update-vaga.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('vaga')
export class VagaController {
  constructor(private readonly vagaService: VagaService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('company')
  async create(@Body() createVagaDto: CreateVagaDto, @Req() req) {
    const empresaId = req.user.sub;
    return this.vagaService.create(createVagaDto, empresaId);
  }

  @Get('find/all')
  async findAll() {
    return this.vagaService.findAll();
  }

  @Get('find/empresa')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('company')
  async findByEmpresa(@Req() req) {
    const empresaId = req.user.sub;
    return this.vagaService.findByEmpresa(empresaId);
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    return this.vagaService.findOne(Number(id));
  }

  @Patch('update/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('company')
  async update(
    @Param('id') id: string,
    @Body() updateVagaDto: UpdateVagaDto,
    @Req() req,
  ) {
    const empresaId = req.user.sub;
    return this.vagaService.update(Number(id), updateVagaDto, empresaId);
  }

  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('company')
  async remove(@Param('id') id: string, @Req() req) {
    const empresaId = req.user.sub;
    return this.vagaService.remove(Number(id), empresaId);
  }

  @Patch('etapa/:etapaId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('company')
  async updateEtapa(
    @Param('etapaId') etapaId: string,
    @Body() body: { nome: string; descricao: string },
    @Req() req,
  ) {
    const empresaId = req.user.sub;
    return this.vagaService.updateEtapa(Number(etapaId), body, empresaId);
  }

  @Delete('etapa/:etapaId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('company')
  async removeEtapa(@Param('etapaId') etapaId: string, @Req() req) {
    const empresaId = req.user.sub;
    return this.vagaService.removeEtapa(Number(etapaId), empresaId);
  }

  @Post(':id/etapa')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('company')
  async addEtapa(
    @Param('id') id: string,
    @Body() body: { nome: string; descricao: string },
    @Req() req,
  ) {
    const empresaId = req.user.sub;
    return this.vagaService.addEtapa(Number(id), body, empresaId);
  }
}
