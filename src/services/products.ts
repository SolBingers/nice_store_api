import { Phone } from '../models/Phone';
import { Product } from '../models/Product';
import lodash from 'lodash';
import { Category } from '../types/Category';
import { SortBy } from '../types/SortBy';

function getDiscountPercent(price: number, fullPrice: number) {
  return 100 - price * 100 / fullPrice;
}

function sortProducts (products: Product[], sort: SortBy) {
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

export async function getAll() {
  const products = await Product.findAll();

  return products;
}

export async function getPage(page = 1, count = 8, category: Category, sort: SortBy, query = '') {
  const products = await Product.findAll({
    where: {
      category,
    },
    limit: count,
    offset: count * (page - 1),
  });

  return sortProducts(products, sort);
}

export function getOne(id: string) {
  return Phone.findByPk(id);
}

export function getNew() {
  return Product.findAll({
    limit: 10,
    order: [['year', 'DESC']],
  });
}

export async function getDiscount() {
  const products = await getAll();

  const discount = products
    .sort((a, b) => getDiscountPercent(a.price, a.fullPrice) - getDiscountPercent(b.price, b.fullPrice))
    .slice(0, 10);

  return discount;
}

export async function getRecommended(id: string) {
  const products = await Product.findAll();

  const recommended = products
    .filter(product => {
      return !product.itemId.includes(id.split('-').slice(0, -2).join('-'));
    });

  return lodash.shuffle(recommended).slice(0, 10);
}