import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CandidaturaService } from '../candidatura.service';
import {
  FONTES_DE_CANDIDATURA,
  FonteDeCandidatura,
} from './fonte-de-candidatura.interface';


@Injectable()
export class IngestaoService {
  private readonly fontes: Map<string, FonteDeCandidatura>;

  constructor(
    @Inject(FONTES_DE_CANDIDATURA) fontes: FonteDeCandidatura[],
    private candidaturaService: CandidaturaService,
  ) {
    this.fontes = new Map(fontes.map((fonte) => [fonte.origem, fonte]));
  }

  async ingerir(chaveFonte: string, payloadCru: unknown, contexto: unknown) {
    const fonte = this.fontes.get(chaveFonte);
    if (!fonte) {
      throw new NotFoundException(
        `Fonte de candidatura desconhecida: ${chaveFonte}`,
      );
    }

    const input = await fonte.mapearParaCandidatura(payloadCru, contexto);
    return this.candidaturaService.aplicar(input);
  }
}
