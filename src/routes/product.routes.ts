import { Router } from 'express';
import ProductsController from '../controllers/product.controller';
import ProductsMidleware from '../middleware/product.Midleware';

const router = Router();

const productsController = new ProductsController();
const productsMidleware = new ProductsMidleware();

router.post(
  '/products', 
  productsMidleware.validProductsName, 
  productsMidleware.validProductsAmount,
  productsController.create,
);
router.get('/products', productsController.getAll);

export default router;