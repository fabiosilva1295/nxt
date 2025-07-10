import { Injectable } from '@nestjs/common';
import { parseAddressLine1 } from 'src/common/utils/payment.util';
import { getPhoneFormated } from 'src/common/utils/phones.util';
import { CreateTiSaudeOrderRequest, TiSaudeOrderStatusResponse } from '../models/order-request';
import { CreateTiSaudeOrderResponse, OrderStatusEnum, PagarmeOrderCheckoutResponse } from '../models/order-response';
import { PaymentService } from './payment.service';

@Injectable()
export class TiSaudeService {

  constructor(private readonly paymentService: PaymentService){}
  
  async getOrder(createTiSaudeDto: CreateTiSaudeOrderRequest): Promise<CreateTiSaudeOrderResponse> {
    const order: PagarmeOrderCheckoutResponse = await this.paymentService.createCheckoutPro(createTiSaudeDto);
    const response: CreateTiSaudeOrderResponse = {
      status: 'OK',
      resource: {
        uuid: order.id,
        url: order.checkouts[0].payment_url
      }
    };
    return response;
  }

  async getOrderById(uuid: string): Promise<TiSaudeOrderStatusResponse> {
    const order: PagarmeOrderCheckoutResponse = await this.paymentService.getOrderById(uuid);
    const response: TiSaudeOrderStatusResponse = {
      status: 'OK',
      resource: {
        uuid: order.id,
        status_id: OrderStatusEnum[order.status],
        number: order.code,
        customer_id: order.customer.id,
        amount: order.amount,
        due_date_at: order.checkouts[0].expires_at,
        url: order.checkouts[0].payment_url,
        customer: {
          uuid: order.customer.id,
          document: order.customer.document,
          name: order.customer.name,
          phone: getPhoneFormated(order.customer.phones.mobile_phone),
          email: order.customer.email,
          postalcode: order.checkouts[0].billing_address.zip_code,
          address: parseAddressLine1(order.checkouts[0].billing_address.line_1).street,
          number:  parseAddressLine1(order.checkouts[0].billing_address.line_1).number,
          complement: order.checkouts[0].billing_address.line_2,
          district: parseAddressLine1(order.checkouts[0].billing_address.line_1).district,
          city: order.checkouts[0].billing_address.city,
          uf: order.checkouts[0].billing_address.state,
          pagarme_id: null
        }
      },
      message: null
    }
    return response
  }
}
