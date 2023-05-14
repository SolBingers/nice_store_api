import { NextFunction, Response, Request } from 'express';
import { ApiError } from '../exceptions/ApiError';

export function errorMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
  if (error instanceof ApiError) {
    const { status, message, errors } = error;

    res.status(status).send({ message, errors });
  }

  res.sendStatus(500).send({
    message: 'Unexpected error'
  });
}