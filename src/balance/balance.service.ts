import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Balance } from './entities/balance.entity';
import { Repository } from 'typeorm';
import { UpdateBalanceDto } from './dto/update-balance.dto';
import { CreateBalanceDto } from './dto/create-balance.dto';

@Injectable()
export class BalanceService {
  constructor(
    @InjectRepository(Balance)
    private readonly balanceRepository: Repository<Balance>,
  ) {}

  findById(id: number): Promise<Balance> {
    return this.balanceRepository.findOneBy({ id });
  }

  async debit(cpf: string, type: string): Promise<Balance> {
    const balance: Balance = await this.balanceRepository.findOneBy({ id: 1 });
    balance.money = 1;
    return this.balanceRepository.save(balance);
  }

  updateUser(updateUserDto: UpdateBalanceDto): Promise<Balance> {
    const balance: Balance = new Balance();
    balance.money = updateUserDto.money;
    balance.pass = updateUserDto.pass;
    return this.balanceRepository.save(balance);
  }

  createBalance(createBalanceDto: CreateBalanceDto): Promise<Balance> {
    const balance: Balance = new Balance();
    balance.money = createBalanceDto.money;
    balance.pass = createBalanceDto.pass;
    return this.balanceRepository.save(balance);
  }
}
