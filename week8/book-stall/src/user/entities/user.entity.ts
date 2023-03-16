import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column({ type: 'timestamp' })
  public createdAt!: Date;

  @Column({ type: 'timestamp' })
  public updatedAt!: Date;
}
