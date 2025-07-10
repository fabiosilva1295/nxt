import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PaymentService } from './services/payment.service';
import { TiSaudeService } from './services/ti-saude.service';
import { TiSaudeController } from './ti-saude.controller';

@Module({
  controllers: [TiSaudeController],
  imports: [
    HttpModule
  ],
  providers: [
    TiSaudeService, 
    PaymentService
  ],
})
export class TiSaudeModule {}
