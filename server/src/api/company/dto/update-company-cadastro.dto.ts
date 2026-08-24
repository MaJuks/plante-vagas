import { IsOptional } from 'class-validator';
import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CompanyDto } from './create-company-dto';

export class UpdateCompanyCadastroDto extends PartialType(
  OmitType(CompanyDto, ['email', 'password', 'cnpj', 'description'] as const),
) {
  @IsOptional()
  currentPassword?: string;

  @IsOptional()
  newPassword?: string;
}
