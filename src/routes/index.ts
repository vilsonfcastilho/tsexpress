import { Router } from 'express';

import usersRouter from './users.routes';
import sessiosRouter from './sessions.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/sessions', sessiosRouter);

export default router;
