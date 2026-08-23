export interface CandidaturaInput {
  candidatoId: number;
  vagaId: number;
  origem: string;
}

export interface FonteDeCandidatura {
  readonly origem: string;
  mapearParaCandidatura(
    payloadCru: unknown,
    contexto: unknown,
  ): Promise<CandidaturaInput>;
}

export const FONTES_DE_CANDIDATURA = 'FONTES_DE_CANDIDATURA';
