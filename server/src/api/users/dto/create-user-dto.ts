import { IsEmail, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class AddressDTO {
  @IsOptional()
  country?: string;

  @IsOptional()
  state?: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  district: string;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  number: string;

  @IsOptional()
  complement?: string;

  @IsNotEmpty()
  postalCode: string;
}

export class CreateUserDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  dateNasc: string;

  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  disablePerson: string;

  @ValidateNested()
  @Type(() => AddressDTO)
  @IsNotEmpty()
  address: AddressDTO;
}
