import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  county: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  zip_code: string;

  @Column()
  line_1: string;

  @Column({ nullable: true })
  line_2?: string;
}