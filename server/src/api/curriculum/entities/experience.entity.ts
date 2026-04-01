export class ExperienciaEntity {
  id: number;
  cargo: string;
  empresa: string;
  descricao: string;
  inicioData: Date;
  fimData?: Date;
  empregoAtual: boolean;
}