import { Book } from 'src/book/entities/book.entity';
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

  @Column({ type: 'varchar', length: 50 })
  public username: string;

  @Column({ type: 'varchar', length: 50 })
  public email: string;

  @Column({ type: 'varchar', length: 50 })
  public password: string;

  /*
   * Create and Update Date Columns
   */
  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
