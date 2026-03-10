import { IsNotEmpty, IsNumber } from 'class-validator';

export default class CreateAddressDTO {
  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  district: string;

  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  number: string;

  @IsNotEmpty()
  complement: string;

  @IsNotEmpty()
  postalCode: string;

  @IsNotEmpty()
  @IsNumber()
  userCandidateId: number;
}
