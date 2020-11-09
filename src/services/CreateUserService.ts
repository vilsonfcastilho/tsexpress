import { hash } from 'bcryptjs';

import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  email: string;
  password: string;
}

class CreateUserService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({ email, password }: Request): Promise<User> {
    const userFound = this.usersRepository.findUser(email);

    if (userFound) {
      throw new Error('E-mail address already used.');
    }

    const hashedPassword = await hash(password, 10);

    const user = this.usersRepository.create({
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
