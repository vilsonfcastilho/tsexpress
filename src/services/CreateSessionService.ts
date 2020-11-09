import { compare } from 'bcryptjs';

import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  email: string;
  password: string;
}

class CreateSessionService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public async execute({ email, password }: Request): Promise<{ user: User }> {
    const user = this.usersRepository.findUser(email);

    if (!user) {
      throw new Error('Incorrect e-mail/password combination.');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect e-mail/password combination.');
    }

    return {
      user,
    };
  }
}

export default CreateSessionService;
