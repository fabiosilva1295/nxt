import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTiSaudeOrderRequest } from './models/order-request';
import { CreateTiSaudeOrderResponse } from './models/order-response';
import { TiSaudeService } from './services/ti-saude.service';

@Controller('ti-saude')
export class TiSaudeController {
  constructor(private readonly tiSaudeService: TiSaudeService) {}

  @Post('orders')
  async create(@Body() createTiSaudeDto: CreateTiSaudeOrderRequest): Promise<CreateTiSaudeOrderResponse>{
    return await this.tiSaudeService.getOrder(createTiSaudeDto);
  }

  @Get('orders/:uuid')
  async getOrdersById(@Param() {uuid}) {
    return await this.tiSaudeService.getOrderById(uuid)
  }
}
