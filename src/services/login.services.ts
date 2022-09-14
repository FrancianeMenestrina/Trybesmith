import connection from '../models/connection';
import LoginModel from '../models/login.models';
import Login from '../interfaces/login.interface';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async getUsers(dadosLogin: Login): Promise<Login | null> {
    const users = await this.model.getUsers(dadosLogin);
    return users;
  }
}

export default LoginService;
