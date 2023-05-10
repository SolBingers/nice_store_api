import * as productsService from '../services/products';
import { Request, Response } from 'express';

export const getAll = async (req: Request, res: Response) => {
  const { page = 1, count = 8 } = req.query;
  const products = await productsService.getPage(Number(page), Number(count));

  res.send(products);
};

export const getOne = async (req: Request, res: Response) => {
  const { itemId } = req.params;
  const product = await productsService.getOne(itemId);

  res.send(product);
};

export const getNew = async (req: Request, res: Response) => {
  const products = await productsService.getNew();

  res.send(products);
};
