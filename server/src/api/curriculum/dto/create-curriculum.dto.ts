import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class ExperienciaDto {
  @IsString()
  cargo: string;

  @IsString()
  empresa: string;

  @IsString()
  descricao: string;

  @IsDateString()
  inicioData: string;

  @IsOptional()
  @IsDateString()
  fimData?: string;

  @IsOptional()
  @IsBoolean()
  empregoAtual?: boolean;
}

class FormacaoDto {
  @IsString()
  nivelFormacao: string;

  @IsString()
  grauFormacao: string;

  @IsString()
  curso: string;

  @IsString()
  nomeInstituicao: string;

  @IsString()
  status: string;

  @IsDateString()
  inicioData: string;

  @IsOptional()
  @IsDateString()
  fimData?: string;
}

class CertificadoDto {
  @IsString()
  nomeInstituicao: string;

  @IsString()
  descricao: string;

  @IsString()
  certificate_name: string;
}

class IdiomaDto {
  @IsString()
  idioma: string;

  @IsString()
  nivel: string;
}

class DiferencialDto {
  @IsString()
  descricao: string;
}

class OperacaoAgricolaDto {
  @IsString()
  nome: string;

  @IsString()
  nivelExperiencia: string;

  @IsString()
  descricao: string;
}

class OperacaoPecuariaDto {
  @IsString()
  nome: string;

  @IsString()
  nivelExperiencia: string;

  @IsString()
  descricao: string;
}

class OperacaoFlorestalDto {
  @IsString()
  nome: string;

  @IsString()
  nivelExperiencia: string;

  @IsString()
  descricao: string;
}

class CulturaDto {
  @IsString()
  nome: string;

  @IsString()
  nivelExperiencia: string;

  @IsString()
  descricao: string;
}

class MaquinaDto {
  @IsString()
  nome: string;

  @IsString()
  nivelExperiencia: string;

  @IsString()
  descricao: string;
}

class TecnologiaDto {
  @IsString()
  nome: string;

  @IsString()
  nivelExperiencia: string;

  @IsString()
  descricao: string;
}

export const CURRICULUM_SECTION_MODEL: Record<string, string> = {
  experiencias: 'experienciaProfissional',
  formacoes: 'formacaoAcademica',
  certificados: 'certificado',
  idiomas: 'idioma',
  diferenciais: 'diferencial',
  operacoesAgricolas: 'operacaoAgricola',
  operacoesPecuarias: 'operacaoPecuaria',
  operacoesFlorestais: 'operacaoFlorestal',
  culturas: 'cultura',
  maquinas: 'maquina',
  tecnologias: 'tecnologia',
};

export class UpdateCurriculumSectionDto {
  @IsArray()
  data: Record<string, any>[];
}

export class CreateCurriculumDto {

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExperienciaDto)
  experiencias: ExperienciaDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FormacaoDto)
  formacoes: FormacaoDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CertificadoDto)
  certificados: CertificadoDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IdiomaDto)
  idiomas: IdiomaDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DiferencialDto)
  diferenciais: DiferencialDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OperacaoAgricolaDto)
  operacoesAgricolas: OperacaoAgricolaDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OperacaoPecuariaDto)
  operacoesPecuarias: OperacaoPecuariaDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OperacaoFlorestalDto)
  operacoesFlorestais: OperacaoFlorestalDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CulturaDto)
  culturas: CulturaDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MaquinaDto)
  maquinas: MaquinaDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TecnologiaDto)
  tecnologias: TecnologiaDto[];
}