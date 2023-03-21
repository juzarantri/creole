import { Currency, GenreType } from 'src/common/helper/constants';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';



@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  public bid: string;

  @Column({ type: 'varchar', length: 20 })
  public author: string;

  @Column({ type: 'varchar', length: 50 })
  public bookName: string;

  @Column({ type: 'enum', enum: GenreType, default: GenreType.NOVEL })
  public genre: string;

  @ManyToOne(() => User, (user) => user.books, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  public user: User;

  @Column({ type: 'date', default: new Date() })
  public publishedAt: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  public price: Number;

  @Column({ type: 'enum', enum: Currency, default: Currency.INR })
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
