import { Module } from '@nestjs/common';
import { VagaService } from './vaga.service';
import { VagaController } from './vaga.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CandidaturaModule } from '../candidatura/candidatura.module';

@Module({
  imports: [PrismaModule, CandidaturaModule],
  controllers: [VagaController],
  providers: [VagaService],
})
export class VagaModule {}
