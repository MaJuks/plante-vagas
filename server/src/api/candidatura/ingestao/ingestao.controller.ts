import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { IngestaoService } from './ingestao.service';
import { ApiKeyGuard } from './api-key.guard';

/**
 * Porta de entrada de fontes externas de candidatura, autenticada por API
 * key de empresa (ApiKeyGuard). Hoje só existe a simulação "rh-externo-mock",
 * mas o endpoint é genérico por :sistema para caber outras fontes no futuro.
 */
@Controller('candidatura/integracoes')
export class IngestaoController {
  constructor(private ingestaoService: IngestaoService) {}

  @Post(':sistema')
  @UseGuards(ApiKeyGuard)
  async ingerir(
    @Param('sistema') sistema: string,
    @Body() body: unknown,
    @Req() req,
  ) {
    return this.ingestaoService.ingerir(sistema, body, {
      empresaId: req.empresaId,
    });
  }
}
