import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const router = Router();

const ordersController = new OrderController();

router.get('/orders', ordersController.getAll);

export default router;