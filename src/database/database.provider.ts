import { DataSource } from 'typeorm';
import 'dotenv/config';
import { User } from '../user/entity/user.entity';

export const DatabaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: process.env.POSTGRES_PASSWORD,
        database: 'marketplace',
        entities: [User],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
