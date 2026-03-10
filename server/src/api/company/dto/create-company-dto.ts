import { IsEmail, IsString } from 'class-validator';

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
}
