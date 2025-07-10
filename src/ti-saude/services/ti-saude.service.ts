import { Injectable } from '@nestjs/common';
import { CreateTiSaudeDto } from '../dto/create-ti-saude.dto';
import { OrderPaymentResponse, OrderResponse } from '../models/order.model';
import { PaymentService } from './payment.service';

@Injectable()
export class TiSaudeService {

  constructor(private readonly paymentService: PaymentService){}
  
  async getOrder(createTiSaudeDto: CreateTiSaudeDto): Promise<OrderResponse> {
    const order: OrderPaymentResponse = await this.paymentService.createCheckoutPro(createTiSaudeDto);
    const response: OrderResponse = {
      status: 'OK',
      resource: {
        uuid: order?.order_code,
        url: order?.url
      }
    }
    return response;
  }

  async getOrderById(uuid: string) {
    const order = await this.paymentService.getOrderById(uuid);
    return order
  }
}
