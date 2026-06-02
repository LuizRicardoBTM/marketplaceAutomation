import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  constructor(id: number, firstName: string, email: string, password: string) {
    this.id = id;
    this.firstName = firstName;
    this.email = email;
    this.password = password;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
