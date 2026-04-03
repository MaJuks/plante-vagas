import { CertificadoEntity } from "./certificate.entity";
import { DiferencialEntity } from "./differential.entity";
import { ExperienciaEntity } from "./experience.entity";
import { FormacaoEntity } from "./formation.entity";
import { IdiomaEntity } from "./lenguage.entity";

export class Curriculum {}


export class CurriculoEntity {
  id: number;
  usuarioId: number;

  experiencias: ExperienciaEntity[];
  formacoes: FormacaoEntity[];
  certificados: CertificadoEntity[];
  idiomas: IdiomaEntity[];
  diferenciais: DiferencialEntity[];

  createdAt: Date;
  updatedAt: Date;
}