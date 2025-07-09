import { Body, Controller, Post } from '@nestjs/common';
import { TiSaudeRequestBody } from 'src/common/models/ti-saude/ti-saude-request.model';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('checkout-pro')
  async createCheckoutPro(@Body() body: TiSaudeRequestBody) {
    return await this.paymentService.createCheckoutPro(body);
  }
}
