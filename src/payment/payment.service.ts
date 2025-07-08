import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class PaymentService {
  private readonly pagarmeApi: string = 'https://api.pagar.me/core/v5/paymentlinks';
  private apiKey: string;

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('PAGARME_API_KEY') || '';
    
  }
  async createCheckoutPro(data: any) {
      const options: any = {
        method: 'POST',
        url: 'https://sdx-api.pagar.me/core/v5/paymentlinks',
        headers: {
          accept: 'application/json', 
          'content-type': 'application/json',
          Authorization: `Basic ${Buffer.from(this.apiKey +':').toString('base64')}`,
        data: {
          is_building: false,
          payment_settings: {
            credit_card_settings: {
              installments_setup: {
                interest_type: 'simple'
                }
              }
            }
          }
        }
      }

    axios
      .request(options)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
        }
  }


