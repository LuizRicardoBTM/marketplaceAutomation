import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from '../products/products.controller';
import { UserController } from '../user/controller/user.controller';
import { UserService } from '../user/service/user.service';
import { DataSource } from 'typeorm';
import { UserModule } from '../user/module/user.module';
import { User } from '../user/interface/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import { AuthModule } from '../auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: process.env.POSTGRES_PASSWORD,
      database: 'marketplace',
      entities: [User],
      synchronize: true,
      invalidWhereValuesBehavior: {
        undefined: 'ignore',
      },
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController, ProductsController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
