import { Router } from 'express';

import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();
const usersRepository = new UsersRepository();

usersRouter.get('/', (req, res) => {
  const users = usersRepository.all();

  return res.json(users);
});

usersRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const createUser = new CreateUserService(usersRepository);

    const user = await createUser.execute({
      email,
      password,
    });

    return res.json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default usersRouter;
