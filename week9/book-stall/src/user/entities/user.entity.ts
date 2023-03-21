import { Book } from 'src/book/entities/book.entity';
import { Role } from 'src/common/helper/constants';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public uid: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  public username: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  public email: string;

  @Column({ type: 'varchar', length: 50 })
  public password: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  public role: string;

  @Column({ type: 'varchar', length: 50, default: 'India' })
  public country: string;

  @Column({ type: 'text', default: null })
  public phoneNumber: string;

  @OneToMany(() => Book, (book) => book.user)
  public books: Book[];

  /*
   * Create and Update Date Columns
   */
  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
