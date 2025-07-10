import { PartialType } from '@nestjs/mapped-types';
import { CreateTiSaudeDto } from './create-ti-saude.dto';

export class UpdateTiSaudeDto extends PartialType(CreateTiSaudeDto) {}
