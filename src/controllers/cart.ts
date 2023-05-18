import { Request, Response } from 'express';
import * as cartService from '../services/cart';
import * as productsService from '../services/products';

export const getByUSerId = async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (!userId) {
    res.sendStatus(400);

    return;
  }

  const cart = await cartService.getByUserId(userId);

  res.send(cart);
};

export const addOne = async (req: Request, res: Response) => {
  const { userId, productId } = req.body;

  if (!userId || !productId) {
    res.sendStatus(400);

    return;
  }

  const product = await productsService.getById(productId);

  if (!product) {
    res.sendStatus(404);
    return;
  }

  const added = await cartService.addOne(userId, productId);

  res.send(added);
};

export const deleteOne = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400);
    return;
  }

  const cartItem = await cartService.getById(Number(id));

  if (!cartItem) {
    res.sendStatus(404);
    return;
  }

  await cartService.deleteOne(Number(id));

  res.sendStatus(200);
};

export const updateOne = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { data } = req.body;

  if (!id || !data) {
    res.sendStatus(400);
    return;
  }

  const cartItem = await cartService.getById(Number(id));

  if (!cartItem) {
    res.sendStatus(404);
    return;
  }

  await cartService.updateOne(Number(id), data);

  res.sendStatus(200);
};
