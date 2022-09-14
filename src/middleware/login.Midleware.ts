import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/login.services';

class MiddleError {
  constructor(private loginService = new LoginService()) {}

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const dadosLogin = req.body;
    const { username, password } = dadosLogin;
    if (!username) {
      return res.status(400).json({ message: '"username" is required' });
    }
    if (!password) {
      return res.status(400).json({ message: '"password" is required' });
    }
    const result = await this.loginService.getUsers(dadosLogin);
    if (!result) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    next();
  };
}

export default MiddleError;