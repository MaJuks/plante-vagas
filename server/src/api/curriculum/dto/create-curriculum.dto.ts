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

  @IsDateString()
  dataEmissao: string;
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
}