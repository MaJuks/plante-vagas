import { IsOptional, ValidateNested } from "class-validator";
import { AddressDTO } from "./create-user-dto";
import { Type } from "class-transformer";

export class UpdateUserDTO {

@IsOptional()
currentPassword?: string

@IsOptional()
newPassword?: string

@IsOptional()
disablePerson?: string 

@IsOptional()
@ValidateNested()
@Type(() => AddressDTO)
address?: AddressDTO


@IsOptional()
phone?: string

}