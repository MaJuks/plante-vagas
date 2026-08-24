import { PartialType, PickType } from '@nestjs/mapped-types';
import { CompanyDto } from './create-company-dto';

export class UpdateCompanyProfileDto extends PartialType(
  PickType(CompanyDto, [
    'description',
    'facebookUrl',
    'instagramUrl',
    'linkedinUrl',
    'websiteUrl',
  ] as const),
) {}
