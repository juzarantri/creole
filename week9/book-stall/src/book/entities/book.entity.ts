import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/// Books genre
export enum genreTypes {
  NOVEL = 'novel',
  ACTION = 'action',
  SCIFI = 'scifi',
  ROMANCE = 'romance',
  THRILLER = 'thriller',
  HORROR = 'horror',
  DRAMA = 'drama',
  AUTOBIOGRAPHY = 'autobiography',
  MYSTERY = 'mystery',
  CRIME = 'crime',
  JOURNAL = 'journal',
}

/// Currencies
export enum currencies {
  INR = 'inr',
  USD = 'usd',
  GBP = 'gbp',
}

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  public bid: string;

  @Column({ type: 'varchar', length: 20 })
  public author: string;

  @Column({ type: 'varchar', length: 50 })
  public bookName: string;

  @Column({ type: 'enum', enum: genreTypes, default: genreTypes.NOVEL })
  public genre: string;

  @ManyToOne(() => User, (user) => user.books)
  public user: User;

  @Column({ type: 'date', default: new Date() })
  public publishedAt: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  public price: Number;

  @Column({ type: 'enum', enum: currencies, default: currencies.INR })
  public currency: string;

  @Column({ type: 'numeric', default: 0 })
  public unitPurchased: string;

  /*
   * Create and Update Date Columns
   */
  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
