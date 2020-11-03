import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.json({ index: 'Welcome to tsexpress!!!' });
});

export default router;
