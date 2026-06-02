import { Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('list')
  async getProducts(): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return 'Products list';
  }

  @Get('list/:id')
  getSpecificProduct(@Param() params: { id: string }): string {
    console.log(params.id);
    return `Product details for ID: ${params.id}`;
  }

  @Post('create')
  @HttpCode(204)
  createProduct(): string {
    return 'Product created';
  }
}
