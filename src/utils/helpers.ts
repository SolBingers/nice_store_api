import { SortBy } from '../types/SortBy';
import { Product } from '../models/Product';

export function getDiscountPercent(price: number, fullPrice: number) {
  return 100 - price * 100 / fullPrice;
}

export function sortProducts (products: Product[], sort: SortBy) {
  switch (sort) {
  case SortBy.Old:
    return products.sort((a, b) => a.year - b.year);
    
  case SortBy.New:
    return products.sort((a, b) => b.year - a.year);

  case SortBy.Cheap:
    return products.sort((a, b) => a.price - b.price);

  default:
    return products;
  }
}
