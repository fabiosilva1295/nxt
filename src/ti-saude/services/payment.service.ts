import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { pupulatePayloadData } from 'src/common/utils/payload-order';
import { CreateTiSaudeOrderRequest } from '../models/order-request';
import { PagarmeOrderCheckoutResponse } from '../models/order-response';

@Injectable()
export class PaymentService {
  private readonly pagarmeApi: string = 'https://api.pagar.me/core/v5/orders';
  private apiKey: string;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService
  ){
    this.apiKey = this.configService.get<string>('PAGARME_API_KEY') || '';
  }

  async createCheckoutPro(data: CreateTiSaudeOrderRequest):  Promise<PagarmeOrderCheckoutResponse>{
    const headers = this.buildHeaders();
    const payload = this.buildPayloadToCreateLink(data);

    const response$ = this.httpService.post(this.pagarmeApi, payload, { headers });
    const response = await firstValueFrom(response$);

    return response.data as PagarmeOrderCheckoutResponse;
  }

  private buildHeaders(): Record<string, string> {
    const token = Buffer.from(`${this.apiKey}:`).toString('base64');
    return {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${token}`,
    };
  }

  private buildPayloadToCreateLink(data: CreateTiSaudeOrderRequest): Record<string, any> {
    const payload =  pupulatePayloadData(data);
    return payload;
  }

  async getOrderById(uuid: string){

    const headers = this.buildHeaders();
    const response$ = this.httpService.get(`${this.pagarmeApi}/${uuid}`, { headers });
    const response = await firstValueFrom(response$);

    return response.data as PagarmeOrderCheckoutResponse;
  }

}


