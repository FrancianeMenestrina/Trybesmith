import { Pool } from 'mysql2/promise';
import Login from '../interfaces/login.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getUsers(dadosLogin: Login): Promise<Login | null> {
    const { username, password } = dadosLogin;
    const [result] = await this.connection
      .execute(
        'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?;',
        [username, password],
      );
    const [user] = result as Login[];
    return user || null;
  }
}