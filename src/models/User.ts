import { uuid } from 'uuidv4';

class User {
  id: string;

  email: string;

  password: string;

  constructor({ email, password }: Omit<User, 'id'>) {
    this.id = uuid();
    this.email = email;
    this.password = password;
  }
}

export default User;
