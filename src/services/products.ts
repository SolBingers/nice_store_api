import { Product } from '../models/Product';

export function getAll() {
  return Product.findAll();
}