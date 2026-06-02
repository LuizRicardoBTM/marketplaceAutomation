import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from '../products/products.controller';
import { UserController } from '../user/user.controller';
import { UserService } from '../user/user.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
