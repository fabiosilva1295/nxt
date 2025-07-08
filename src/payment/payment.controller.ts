import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('checkout-pro')
  async createCheckoutPro(@Body() body: any) {
    return this.paymentService.createCheckoutPro(body);
  }
}
