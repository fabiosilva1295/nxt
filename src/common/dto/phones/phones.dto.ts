import { Type } from "class-transformer";
import { IsNotEmpty, IsString, ValidateNested } from "class-validator";

export class PhoneObject {
  @IsNotEmpty()
  @IsString()
  country_code: string;

  @IsNotEmpty()
  @IsString()
  area_code: string;

  @IsNotEmpty()
  @IsString()
  number: string;
}

export class PhonesObject {
  @ValidateNested()
  @Type(() => PhoneObject)
  home_phone: PhoneObject;

  @ValidateNested()
  @Type(() => PhoneObject)
  mobile_phone: PhoneObject;
}