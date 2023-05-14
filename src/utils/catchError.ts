import { NextFunction, Request, Response } from 'express';

type Action = (req: Request, res: Response, next: NextFunction) => Promise<void>

export function catchError(action: Action) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await action(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}