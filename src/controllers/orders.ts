import { Request, Response } from 'express';
import * as ordersService from '../services/orders';

export const getByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (!userId) {
    res.sendStatus(400);
    return;
  }

  const orders = await ordersService.getByUserId(userId);

  res.send(orders);
};

export const addOne = async (req: Request, res: Response) => {
  const { userId, products, address, totalPrice } = req.body;

  if (!userId || !products || !address || !totalPrice) {
    res.sendStatus(400);
    return;
  }

  const added = await ordersService.addOne(userId, products, address, totalPrice);

  res.send(added);
};
