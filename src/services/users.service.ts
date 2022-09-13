import connection from '../models/connection';
import UserModel from '../models/users.model';
import User from '../interfaces/users.interface';

class ProductService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create(body: User): Promise<User> {
    return this.model.create(body);
  }
}

export default ProductService;
