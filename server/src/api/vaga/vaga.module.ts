import { Module } from '@nestjs/common';
import { VagaService } from './vaga.service';
import { VagaController } from './vaga.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [VagaController],
  providers: [VagaService],
})
export class VagaModule {}
