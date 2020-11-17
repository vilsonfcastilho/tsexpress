import { getRepository, Repository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/infra/typeorm/entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async list(): Promise<User[]> {
    const users = this.ormRepository.find();

    return users;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { email },
    });

    return user;
  }

  public async create({ email, password }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({ email, password });

    await this.ormRepository.save(user);

    return user;
  }
}

export default UsersRepository;
