import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@Entity()
export class Students {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ 
    nullable: false,
  })
  name: string;

  @Column({ 
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    nullable: false
  })
  password: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt: Date;
}
