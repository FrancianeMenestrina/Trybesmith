import { Router } from 'express';
import UsersController from '../controllers/user.controller';
import UsersMiddleware from '../middleware/user.Midleware';

const router = Router();

const usersController = new UsersController();
const usersMiddleware = new UsersMiddleware();

router.post(
  '/users', 
  usersMiddleware.validClasse, 
  usersMiddleware.validLevel,

  usersMiddleware.validPassword,

  usersMiddleware.validUsername,

  usersController.create,
);

export default router;