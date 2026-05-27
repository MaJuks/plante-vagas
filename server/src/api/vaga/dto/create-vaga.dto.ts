import { IsArray, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class BeneficioDto {
  @IsString()
  nome: string;
}

class EtapaDto {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;
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
  @Type(() => EtapaDto)
  etapas: EtapaDto[];
}
