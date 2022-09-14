import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import LoginMiddleware from '../middleware/login.Midleware';

const router = Router();

const loginController = new LoginController();

const loginMiddleware = new LoginMiddleware();

router.post('/login', loginMiddleware.getUsers, loginController.getUsers);

export default router;