import { NextFunction, Request, Response } from 'express';
import ProductService from '../services/login.services';

class MiddleErrorProduct {
  constructor(private productService = new ProductService()) {}

  public validProductsName = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    if (typeof name !== 'string') {
      return res.status(422).json({ message: '"name" must be a string' });
    }
    if (name.length <= 2) {
      return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
    }
    next();
  };

  public validProductsAmount = async (req: Request, res: Response, next: NextFunction) => {
    const { amount } = req.body;
    if (!amount) {
      return res.status(400).json({ message: '"amount" is required' });
    }
    if (typeof amount !== 'string') {
      return res.status(422).json({ message: '"amount" must be a string' });
    }
    if (amount.length <= 2) {
      return res.status(422)
        .json({ message: '"amount" length must be at least 3 characters long' });
    }
    next();
  };
}

export default MiddleErrorProduct;