import { Book } from 'src/book/entities/book.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/// Order types
export enum orderTypes {
  COD = 'cod',
  PREPAID = 'prepaid',
}

/// Order statuses
export enum orderStatuses {
  ORDERED = 'ordered',
  SHIPPED = 'shipped',
  DISPATCHED = 'dispatached',
  DELIVERED = 'delivered',
}

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn('uuid')
  public orderId: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'userId' })
  public user: User;

  @OneToOne(() => Book)
  @JoinColumn({ name: 'bookId' })
  public book: Book;

  @Column({ type: 'enum', enum: orderTypes })
  public orderType: string;

  @Column({ type: 'enum', enum: orderStatuses, default: orderStatuses.ORDERED })
  public orderStatus: string;

  /*
   * Create and Update Date Columns
   */
  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
