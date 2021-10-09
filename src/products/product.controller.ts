import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './prosuct.service';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') producttitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPricee: number,
  ) {
    const generatedId = this.productsService.insertProduct(
      producttitle,
      prodDesc,
      prodPricee,
    );
    return { id: generatedId };
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch(':id')
  upadateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPricee: number,
  ) {
    return this.productsService.updateProduct(
      prodId,
      prodTitle,
      prodDesc,
      prodPricee,
    );
  }

  @Delete(':id')
  deleteProduct(@Param('id') prodId: string) {
    this.productsService.deleteProduct(prodId);
    return null;
  }
}
