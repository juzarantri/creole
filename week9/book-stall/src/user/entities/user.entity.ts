import { Book } from 'src/book/entities/book.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum roles {
  USER = 'user',
  AUTHOR = 'author',
  ADMIN = 'admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public uid: string;

  @Column({ type: 'varchar', length: 50 })
  public username: string;

  @Column({ type: 'varchar', length: 50 })
  public email: string;

  @Column({ type: 'varchar', length: 50 })
  public password: string;

  @Column({ type: 'enum', enum: roles, default: roles.USER })
  public role: string;

  @Column({ type: 'varchar', length: 50, default: null })
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
