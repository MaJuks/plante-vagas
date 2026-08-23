import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CandidaturaInput,
  FonteDeCandidatura,
} from './fonte-de-candidatura.interface';

interface PayloadInterno {
  candidatoId: number;
  vagaId: number;
}

@Injectable()
export class CandidaturaInternaFonte implements FonteDeCandidatura {
  readonly origem = 'interna';

  mapearParaCandidatura(payloadCru: unknown): Promise<CandidaturaInput> {
    const payload = payloadCru as Partial<PayloadInterno>;

    if (!payload?.candidatoId || !payload?.vagaId) {
      throw new BadRequestException(
        'Payload inválido: esperado { candidatoId, vagaId }',
      );
    }

    return Promise.resolve({
      candidatoId: payload.candidatoId,
      vagaId: payload.vagaId,
      origem: this.origem,
    });
  }
}
