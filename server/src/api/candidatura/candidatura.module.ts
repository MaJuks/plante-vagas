import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CandidaturaService } from './candidatura.service';
import { CandidaturaNotificationService } from './candidatura-notification.service';
import { CandidaturaController } from './candidatura.controller';
import { IngestaoController } from './ingestao/ingestao.controller';
import { IngestaoService } from './ingestao/ingestao.service';
import { ApiKeyGuard } from './ingestao/api-key.guard';
import { CandidaturaInternaFonte } from './ingestao/candidatura-interna.fonte';
import { CandidaturaRhExternoFonte } from './ingestao/candidatura-rh-externo.fonte';
import { FONTES_DE_CANDIDATURA } from './ingestao/fonte-de-candidatura.interface';

@Module({
  imports: [PrismaModule],
  controllers: [CandidaturaController, IngestaoController],
  providers: [
    CandidaturaService,
    CandidaturaNotificationService,
    ApiKeyGuard,
    CandidaturaInternaFonte,
    CandidaturaRhExternoFonte,
    {
      provide: FONTES_DE_CANDIDATURA,
      useFactory: (
        interna: CandidaturaInternaFonte,
        rhExterno: CandidaturaRhExternoFonte,
      ) => [interna, rhExterno],
      inject: [CandidaturaInternaFonte, CandidaturaRhExternoFonte],
    },
    IngestaoService,
  ],
  exports: [CandidaturaService, CandidaturaNotificationService],
})
export class CandidaturaModule {}
