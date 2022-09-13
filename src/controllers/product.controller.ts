// ./controllers/books.controller.ts

import { Request, Response } from 'express';
import ProductService from '../services/products.service';

class ProductsController {
  constructor(private productService = new ProductService()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productService.create(product);
    res.status(201).json(productCreated);
  };
}

export default ProductsController;