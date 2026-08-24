import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CompanyDto } from './create-company-dto';

export class UpdateCompanyCadastroDto extends PartialType(
  OmitType(CompanyDto, ['email', 'password', 'cnpj', 'description'] as const),
) {}
