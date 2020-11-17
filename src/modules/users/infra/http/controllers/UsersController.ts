import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';

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
