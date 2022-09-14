import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import LoginService from '../services/login.services';

class LoginController {
  constructor(private loginService = new LoginService()) { }

  public getUsers = async (req: Request, res: Response) => {
    const dadosLogin = req.body;
    const loginResult = await this.loginService.getUsers(dadosLogin);
    if (!loginResult) return null;
    const token = jwt.sign({ dadosLogin }, 'senha', { expiresIn: '1d' });
    return res.status(200).json({ token });
  };
}

export default LoginController;
