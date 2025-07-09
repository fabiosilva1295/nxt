import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { getDDD, getNumberWithoutDDD } from 'src/common/models/ti-saude/phones.model';
import { TiSaudeRequestBody } from 'src/common/models/ti-saude/ti-saude-request.model';
import { getHoursDiffBetweenDates } from 'src/common/utils/date.util';
import { converterParaCentavos } from 'src/common/utils/payment.util';

@Injectable()
export class PaymentService {
  private readonly pagarmeApi: string = 'https://sdx-api.pagar.me/core/v5/paymentlinks';
  private apiKey: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService
  ){
    this.apiKey = this.configService.get<string>('PAGARME_API_KEY') || '';
  }

  async createCheckoutPro(data: TiSaudeRequestBody) {
    const headers = this.buildHeaders();
    const payload = this.buildPayload(data);

    const response$ = this.httpService.post(this.pagarmeApi, payload, { headers });
    const response = await firstValueFrom(response$);

    return response.data;
  }

  private buildHeaders(): Record<string, string> {
    const token = Buffer.from(`${this.apiKey}:`).toString('base64');
    return {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${token}`,
    };
  }

  private buildPayload(data: TiSaudeRequestBody): Record<string, any> {
     
    const payload =  {
      is_building: false,
      customer_settings: {
        customer: {
          name: data.customer.name,
          email: data.customer.email,
          code: data.number,
          document: data.customer.document,
          document_type: 'CPF',
          type: 'individual',
          address: {
            country: 'BR',
            zip_code: data.customer.postalcode,
            city: data.customer.city,
            state: data.customer.uf,
            line_1: `${data.customer.number}, ${data.customer.address}, ${data.customer.district}`
          },
          phones: {
            mobile_phone: {
              country_code: '55',
              area_code: getDDD(data.customer.phone),
              number: getNumberWithoutDDD(data.customer.phone)
            }
          },
        }
      },
      payment_settings: {
        pix_settings: {
          expires_in: getHoursDiffBetweenDates(new Date().toString(), new Date(data.due_date_at).toISOString())
        },
        credit_card_settings: {
          operation_type: 'auth_and_capture',
          installments: [
            {
              number: 1,
              total: converterParaCentavos(data.amount),
            },
            {
              number: 2,
              total: converterParaCentavos(data.amount),
            },
          ],
        },
        accepted_payment_methods: ['credit_card', "pix"],
      },
      cart_settings: {
        items: [
          {
            amount: converterParaCentavos(data.amount),
            name: 'Atendimento Telemedicina - NXT ',
            default_quantity: 1,
          },
        ],
      },
      name: 'Banner N12345',
      type: 'order',
    };

    return payload;
  }


}


