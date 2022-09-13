// ./services/books.service.ts

import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Book from '../interfaces/product.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create(book: Book): Promise<Book> {
    return this.model.create(book);
  }
}

export default ProductService;
