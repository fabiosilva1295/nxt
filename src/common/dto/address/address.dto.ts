import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class AddressObject {
  @IsNotEmpty()
  @IsString()
  county: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  zip_code: string;

  @IsNotEmpty()
  @IsString()
  line_1: string;

  @IsOptional()
  @IsString()
  line_2?: string;
}