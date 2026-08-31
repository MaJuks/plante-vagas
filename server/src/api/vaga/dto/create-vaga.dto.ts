import { IsArray, IsDateString, IsInt, IsNumber, IsOptional, IsString, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class BeneficioDto {
  @IsString()
  nome: string;
}

class RequisitoDto {
  @IsString()
  nome: string;
}

class EtapaDto {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;
}

export class ProcessoSeletivoDto {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;

  @IsDateString()
  dataInicio: string;

  @IsInt()
  @Min(1)
  duracaoDias: number;
}

export class CreateVagaDto {
  @IsString()
  nome: string;

  @IsString()
  cargo: string;

  @IsString()
  descricao: string;

  @IsOptional()
  @IsNumber()
  salario?: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BeneficioDto)
  beneficios: BeneficioDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RequisitoDto)
  requisitos: RequisitoDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EtapaDto)
  etapas: EtapaDto[];

  @ValidateNested()
  @Type(() => ProcessoSeletivoDto)
  processoSeletivo: ProcessoSeletivoDto;
}
