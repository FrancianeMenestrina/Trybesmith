import { Router } from 'express';
import ProductsController from '../controllers/product.controller';

const router = Router();

const productsController = new ProductsController();

router.post('/products/', productsController.create);

export default router;