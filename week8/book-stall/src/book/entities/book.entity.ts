import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum genreTypes {
  NOVEL = 'novel',
  ACTION = 'action',
  SCIFI = 'scifi',
  ROMANCE = 'romance',
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

  @ManyToOne(() => User, (user) => user.uid)
  public user: User;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
