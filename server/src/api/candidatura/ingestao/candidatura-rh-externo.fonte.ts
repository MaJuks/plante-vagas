import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  CandidaturaInput,
  FonteDeCandidatura,
} from './fonte-de-candidatura.interface';

interface PayloadRhExterno {
  candidato: { cpf: string };
  vagaExterna: { idNoPlanteVagas: number };
}


@Injectable()
export class CandidaturaRhExternoFonte implements FonteDeCandidatura {
  readonly origem = 'rh-externo-mock';

  constructor(private prisma: PrismaService) {}

  async mapearParaCandidatura(payloadCru: unknown): Promise<CandidaturaInput> {
    const payload = payloadCru as Partial<PayloadRhExterno>;

    if (!payload?.candidato?.cpf || !payload?.vagaExterna?.idNoPlanteVagas) {
      throw new BadRequestException(
        'Payload inválido: esperado { candidato: { cpf }, vagaExterna: { idNoPlanteVagas } }',
      );
    }

    const candidato = await this.prisma.userCandidate.findUnique({
      where: { cpf: payload.candidato.cpf },
    });

    if (!candidato) {
      throw new NotFoundException(
        'A fonte externa só aceita candidatos já cadastrados no Plante Vagas. CPF não encontrado.',
      );
    }

    return {
      candidatoId: candidato.id,
      vagaId: payload.vagaExterna.idNoPlanteVagas,
      origem: this.origem,
    };
  }
}
