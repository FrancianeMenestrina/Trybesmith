import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import UserService from '../services/users.service';

class ProductsController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const { body } = req;
    
    const token = jwt.sign({ body }, 'senha', { expiresIn: '1d' });
    await this.userService.create(body);
    return res.status(201).json({ token });
  };
}

export default ProductsController;