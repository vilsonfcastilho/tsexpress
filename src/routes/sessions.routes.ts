import { Router } from 'express';

import UsersRepository from '../repositories/UsersRepository';
import CreateSessionService from '../services/CreateSessionService';

const sessionsRouter = Router();
const usersRepository = new UsersRepository();

sessionsRouter.get('/', (req, res) => {
  const users = usersRepository.all();

  return res.json(users);
});

sessionsRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;

    const createSession = new CreateSessionService(usersRepository);

    const { user } = await createSession.execute({
      email,
      password,
    });

    return res.json({ user });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default sessionsRouter;
