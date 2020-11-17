import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '../../../services/CreateUserService';
import UsersRepository from '../../typeorm/repositories/UsersRepository';

class UsersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const usersRepository = new UsersRepository();

    const users = await usersRepository.list();

    return res.json(users);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      email,
      password,
    });

    return res.json(user);
  }
}

export default UsersController;
