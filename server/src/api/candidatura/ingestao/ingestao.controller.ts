import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { IngestaoService } from './ingestao.service';
import { ApiKeyGuard } from './api-key.guard';


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
