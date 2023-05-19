import { Request, Response } from 'express';
import * as favoritesService from '../services/favorites';
import * as productsService from '../services/products';
import { Favorite } from '../models/Favorite';

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
  const { userId, itemIds } = req.body;

  if (!userId || !Array.isArray(itemIds)) {
    res.sendStatus(400);

    return;
  }

  const isCreated = await favoritesService.getByUserId(userId);

  if (isCreated) {
    await favoritesService.addOne(userId, itemIds);

    res.sendStatus(200);
    return;
  }

  const favorites = await favoritesService.createOne(userId, itemIds);

  res.send(favorites);

  return;
};
