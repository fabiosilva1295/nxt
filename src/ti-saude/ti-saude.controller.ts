import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTiSaudeDto } from './dto/create-ti-saude.dto';
import { OrderResponse } from './models/order.model';
import { TiSaudeService } from './services/ti-saude.service';

@Controller('ti-saude')
export class TiSaudeController {
  constructor(private readonly tiSaudeService: TiSaudeService) {}

  @Post('orders')
  async create(@Body() createTiSaudeDto: CreateTiSaudeDto): Promise<OrderResponse>{
    return await this.tiSaudeService.getOrder(createTiSaudeDto);
  }

  @Get('orders/:uuid')
  async getOrdersById(@Param() {uuid}) {
    return await this.tiSaudeService.getOrderById(uuid)
  }
}
