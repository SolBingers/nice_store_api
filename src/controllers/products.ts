import * as productsService from '../services/products';
import * as phonesService from '../services/phones';
import { Request, Response } from 'express';
import { Category } from '../types/Category';
import { SortBy } from '../types/SortBy';

export const getAll = async (req: Request, res: Response) => {
  const {
    page = 1, 
    count = 6, 
    category = Category.Phones, 
    query = '', 
    sort = SortBy.New
  } = req.query;
  const products = await productsService.getPage(
    Number(page),
    Number(count),
    category as Category,
    sort as SortBy,
    query as string
  );

  res.send(products);
};

export const getOne = async (req: Request, res: Response) => {
  const { itemId } = req.params;

  if (!itemId) {
    res.sendStatus(400);

    return;
  }

  const product = await phonesService.getOne(itemId);

  if (!product) {
    res.sendStatus(404);

    return;
  }

  res.send(product);
};

export const getNew = async (req: Request, res: Response) => {
  const products = await productsService.getNew();

  res.send(products);
};

export const getDiscount = async (req: Request, res: Response) => {
  const products = await productsService.getDiscount();

  res.send(products);
};

export const getRecommended = async (req: Request, res: Response) => {
  const { itemId } = req.params;

  if (!itemId) {
    res.sendStatus(400);

    return;
  }

  const products = await productsService.getRecommended(itemId);

  res.send(products);
};
