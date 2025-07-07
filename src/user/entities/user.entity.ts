import * as bcrypt from 'bcrypt';
import { AddressObject } from 'src/common/dto/address/address.dto';
import { PhonesObject } from 'src/common/models/phones/phones.model';
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User  {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column({ unique: true })
  email: string;

  @Column()
  code: string;

  @Column()
  document: string;

  @Column()
  document_type: string;

  @Column('jsonb')
  adreess: AddressObject;

  @Column('jsonb')
  pones: PhonesObject;

  @Column({ type: 'date' })
  birthdate: Date;

  @Column({ nullable: true })
  metadata?: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
  }
}
