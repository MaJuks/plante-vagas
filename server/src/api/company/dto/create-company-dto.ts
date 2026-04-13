import { IsEmail, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class AddressCompanyDTO {
  @IsOptional()
  country?: string;

  @IsOptional()
  state?: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  district!: string;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  number: string;

  @IsOptional()
  complement?: string;

  @IsNotEmpty()
  postalCode: string;
}

export class CompanyDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsString()
  cnpj: string;

  @IsString()
  description: string;

  @IsString()
  socialReason: string;

  @IsString()
  fantasyName: string;

  @IsString()
  phone: string;

  @IsString()
  openingDate: string;

  @ValidateNested()
  @Type(() => AddressCompanyDTO)
  @IsNotEmpty()
  address: AddressCompanyDTO;
}
