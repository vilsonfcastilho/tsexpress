import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSessionService from '@modules/users/services/CreateSessionService';

class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const createSession = container.resolve(CreateSessionService);

    const { user, token } = await createSession.execute({
      email,
      password,
    });

    return res.json({ user, token });
  }
}

export default SessionsController;
