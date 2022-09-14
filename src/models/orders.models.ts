import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orders.interface';
import Product from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const resultOrders = await this.connection.execute(
      'SELECT * FROM Trybesmith.Orders',
    );
    const [ordersItems] = resultOrders;
    const orders = JSON.parse(JSON.stringify(ordersItems));

    const resultProducts = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    const [productsItems] = resultProducts;
    const products = JSON.parse(JSON.stringify(productsItems));

    const arrayRetorno: Order[] = [];

    orders.forEach((order: Order) => {
      const productsIds = products
        .filter((product: Product) => product.orderId === order.id)
        .map((product: Product) => product.id);

      arrayRetorno.push({ id: order.id, userId: order.userId, productsIds });
    });

    return arrayRetorno as Order[];
  }
}
