import * as productsService from '../services/products';
import * as phonesService from '../services/phones';
import * as tabletsService from '../services/tablets';
import * as accessoriesService from '../services/accessories';
import { Request, Response } from 'express';
import { SortBy } from '../types/SortBy';
import { Category } from '../types/Category';
import { Phone } from '../models/Phone';
import { Accessory } from '../models/Accessory';
import { Tablet } from '../models/Tablet';
import { DEFAULT_PER_PAGE, DEFAULT_PAGE } from '../utils/constants';

const getSearchQuery = (query: string) => {
  return query.toLocaleLowerCase().split('-').join('%');
};

export const getAll = async (req: Request, res: Response) => {
  const {
    page = DEFAULT_PAGE,
    count = DEFAULT_PER_PAGE,
    query = '',
    sort = SortBy.New
  } = req.query;
  const searchQuery = getSearchQuery(query as string);

  const products = await productsService.getPage(
    Number(page),
    Number(count),
    sort as SortBy,
    searchQuery
  );

  res.send(products);
};

export const getPhones = async (req: Request, res: Response) => {
  const {
    page = DEFAULT_PAGE,
    count = DEFAULT_PER_PAGE,
    query = '',
    sort = SortBy.New
  } = req.query;
  const searchQuery = getSearchQuery(query as string);
  const phones = await productsService.getPhonesPage(
    Number(page),
    Number(count),
    sort as SortBy,
    searchQuery
  );

  res.send(phones);
};

export const getTablets = async (req: Request, res: Response) => {
  const {
    page = DEFAULT_PAGE,
    count = DEFAULT_PER_PAGE,
    query = '',
    sort = SortBy.New
  } = req.query;
  const searchQuery = getSearchQuery(query as string);
  const tablets = await productsService.getTabletsPage(
    Number(page),
    Number(count),
    sort as SortBy,
    searchQuery
  );

  res.send(tablets);
};

export const getAccessories = async (req: Request, res: Response) => {
  const {
    page = DEFAULT_PAGE, 
    count = DEFAULT_PER_PAGE, 
    query = '', 
    sort = SortBy.New 
  } = req.query;
  const searchQuery = getSearchQuery(query as string);
  const accessories = await productsService.getAccessoriesPage(
    Number(page),
    Number(count),
    sort as SortBy,
    searchQuery
  );

  res.send(accessories);
};

export const getOne = async (req: Request, res: Response) => {
  const { itemId } = req.params;

  if (!itemId) {
    res.sendStatus(400);

    return;
  }

  const product = await productsService.getOne(itemId);

  if (!product) {
    res.sendStatus(404);

    return;
  }

  let item: Phone | Tablet | Accessory | null = null;

  switch (product.category) {
  case Category.Phones:
    item = await phonesService.getOne(itemId);
    break;

  case Category.Tablets:
    item = await tabletsService.getOne(itemId);
    break;

  case Category.Accessories:
    item = await accessoriesService.getOne(itemId);
    break;

  default:
    break;
  }

  if (!item) {
    res.sendStatus(404);

    return;
  }

  res.send(item);
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
