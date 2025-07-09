import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
  controllers: [PaymentController],
  imports: [
    HttpModule
  ],
  providers: [PaymentService],
})
export class PaymentModule {}
