import { Request, Response, NextFunction } from 'express';

import AppError from '@shared/errors/AppError';

const globalExceptionHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): Response => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.',
  });
};

export default globalExceptionHandler;
