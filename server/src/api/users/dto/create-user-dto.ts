import { IsEmail, IsNotEmpty } from 'class-validator';

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
}
