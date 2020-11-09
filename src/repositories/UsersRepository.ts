import User from '../models/User';

interface CreateUserDTO {
  email: string;
  password: string;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public all(): User[] {
    return this.users;
  }

  public findUser(email: string): User | null {
    const userFound = this.users.find(user => user.email === email);

    return userFound || null;
  }

  public create({ email, password }: CreateUserDTO): User {
    const user = new User({ email, password });

    this.users.push(user);

    return user;
  }
}

export default UsersRepository;
