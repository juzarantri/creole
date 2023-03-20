import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OrderDetail } from './order-detail.entity';

@Entity()
export class transaction {
  @PrimaryGeneratedColumn('uuid')
  public transactionId: string;

  @OneToOne(() => OrderDetail)
  @JoinColumn({ name: 'orderId' })
  public order: OrderDetail;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  public amountPaid: Number;

  /*
   * Create and Update Date Columns
   */
  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
