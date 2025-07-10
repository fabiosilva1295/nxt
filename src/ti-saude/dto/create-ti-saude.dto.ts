import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { CostumerTiSaude } from "src/common/models/ti-saude/costumer.model";

export class CreateTiSaudeDto {
    @IsString()
    @IsNotEmpty()
    number: string;

    @IsNumber()
    @IsNotEmpty()
	amount: number;

    @IsString()
    @IsNotEmpty()
	due_date_at: string;

    @IsString()
    @IsNotEmpty()
	webhook: string;

    @ValidateNested()
    @Type(() => CustomerDto)
	customer: CostumerTiSaude 
}

class CustomerDto {

    @IsString()
    @IsNotEmpty()
    document: string

    @IsString()
    @IsNotEmpty()
	name: string

    @IsString()
    @IsNotEmpty()
	phone: string

    @IsString()
    @IsNotEmpty()
	email: string

    @IsString()
    @IsNotEmpty()
	postalcode: string

    @IsString()
    @IsNotEmpty()
	address: string

    @IsString()
    @IsNotEmpty()
	number: string
    
    @IsString()
    @IsOptional()
	complement: string

    @IsString()
    @IsNotEmpty()
	district: string

    @IsString()
    @IsNotEmpty()
	city: string

    @IsString()
    @IsNotEmpty()
	uf: string
}
