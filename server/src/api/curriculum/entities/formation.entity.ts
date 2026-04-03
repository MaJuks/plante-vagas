export class FormacaoEntity {
  id: number;
  nivelFormacao: string;
  grauFormacao: string;
  curso: string;
  nomeInstituicao: string;
  status: string;
  inicioData: Date;
  fimData?: Date;
}