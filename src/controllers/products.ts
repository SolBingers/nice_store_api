import * as productsService from '../services/products';
import { Request, Response } from 'express';

export const getAll = async (req: Request, res: Response) => {
  const products = await productsService.getAll();

  res.send(products);
};
