import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 255 })
  password: string;
}
