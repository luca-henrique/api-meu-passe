import { Module } from '@nestjs/common';
import { BalanceGateway } from './balance-gateway';
import { BalanceController } from './balance.controller';
import { BalanceService } from './balance.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Balance } from './entities/balance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Balance])],
  providers: [BalanceGateway, BalanceService],
  controllers: [BalanceController],
  exports: [BalanceService],
})
export class BalanceModule {}
