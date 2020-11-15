import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessiosRouter from '@modules/users/infra/http/routes/sessions.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/sessions', sessiosRouter);

export default router;
