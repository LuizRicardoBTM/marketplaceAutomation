import { Entity, Column } from 'typeorm';
// import { Product } from '../../products/products.entity';

@Entity()
export class User {
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    // product: Product[],
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    // this.product = product;
  }
  @Column({ primary: true })
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // @OneToMany((type) => Product, (product) => product.user)
  // product: Product[];
}
