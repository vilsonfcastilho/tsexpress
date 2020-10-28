import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.json({ index: 'Welcome to typescript-express-starter!!!' });
});

export default router;
