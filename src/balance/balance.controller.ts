import { Controller, Post, Body, Get } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { CreateBalanceDto } from './dto/create-balance.dto';

interface DebitProps {
  type: string;
  cpf: string;
}

@Controller('balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Post()
  create(@Body() createBalanceDto: CreateBalanceDto) {
    return this.balanceService.createBalance(createBalanceDto);
  }

  @Get()
  get() {
    return 'Mesage';
  }

  @Post('/debit')
  debit(@Body() debitBalance: DebitProps) {
    console.log(debitBalance);
    const { type, cpf } = debitBalance;
    return this.balanceService.debit(cpf, type);
  }
}
