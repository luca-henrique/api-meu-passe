import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Balance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  money: number;

  @Column({ type: 'varchar' })
  pass: number;
}
