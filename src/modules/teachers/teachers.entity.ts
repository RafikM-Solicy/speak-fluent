import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@Entity()
export class Teachers {
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