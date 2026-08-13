import { CertificadoEntity } from "./certificate.entity";
import { DiferencialEntity } from "./differential.entity";
import { ExperienciaEntity } from "./experience.entity";
import { FormacaoEntity } from "./formation.entity";
import { IdiomaEntity } from "./lenguage.entity";
import { OperacaoAgricolaEntity } from "./agricultural-operation.entity";
import { OperacaoPecuariaEntity } from "./livestock-operation.entity";
import { OperacaoFlorestalEntity } from "./forestry-operation.entity";
import { CulturaEntity } from "./crop.entity";
import { MaquinaEntity } from "./machine.entity";
import { TecnologiaEntity } from "./technology.entity";

export class Curriculum {}


export class CurriculoEntity {
  id: number;
  usuarioId: number;

  experiencias: ExperienciaEntity[];
  formacoes: FormacaoEntity[];
  certificados: CertificadoEntity[];
  idiomas: IdiomaEntity[];
  diferenciais: DiferencialEntity[];

  operacoesAgricolas: OperacaoAgricolaEntity[];
  operacoesPecuarias: OperacaoPecuariaEntity[];
  operacoesFlorestais: OperacaoFlorestalEntity[];
  culturas: CulturaEntity[];
  maquinas: MaquinaEntity[];
  tecnologias: TecnologiaEntity[];

  createdAt: Date;
  updatedAt: Date;
}