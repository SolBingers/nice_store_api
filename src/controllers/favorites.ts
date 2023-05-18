import { Request, Response } from 'express';
import * as favoritesService from '../services/favorites';

export const getByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (!userId) {
    res.sendStatus(400);

    return;
  }

  const favorites = await favoritesService.getByUserId(userId);

  res.send(favorites);
};

export const addOne = async (req: Request, res: Response) => {
  const { userId, productId } = req.body;

  if (!userId || !productId) {
    res.sendStatus(400);

    return;
  }

  const favourite = await favoritesService.addOne(userId, productId);

  res.send(favourite);
};

export const deleteOne = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400);

    return;
  }

  await favoritesService.deleteOne(Number(id));

  res.sendStatus(200);
};
