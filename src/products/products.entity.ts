import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  constructor(
    id: number,
    user: string,
    productName: string,
    manufacturer: string,
    price: string,
  ) {
    this.id = id;
    this.user = user;
    this.productName = productName;
    this.manufacturer = manufacturer;
    this.price = price;
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: string;

  @Column()
  productName: string;

  @Column()
  manufacturer: string;

  @Column()
  price: string;
}
