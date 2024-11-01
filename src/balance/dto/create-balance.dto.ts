import { IsInt } from 'class-validator';

export class CreateBalanceDto {
  @IsInt()
  money: number;

  @IsInt()
  pass: number;
}
