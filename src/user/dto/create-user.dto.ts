import { Type } from "class-transformer";
import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { AddressObject } from "src/common/dto/address/address.dto";
import { PhonesObject } from "src/common/dto/phones/phones.dto";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  document: string;

  @IsNotEmpty()
  @IsString()
  document_type: string;

  @ValidateNested()
  @Type(() => AddressObject)
  adreess: AddressObject;

  @ValidateNested()
  @Type(() => PhonesObject)
  pones: PhonesObject;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  birthdate: Date;

  @IsOptional()
  @IsString()
  metadata?: string;

  @IsNotEmpty()
  @MinLength(6)
  @IsString()
  password: string;
}
