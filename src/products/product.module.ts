import { Module } from '@nestjs/common';
import { ProductsController } from './product.controller';
import { ProductsService } from './prosuct.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
