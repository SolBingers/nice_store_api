import { Product } from '../models/Product';
import lodash from 'lodash';
import { Category } from '../types/Category';
import { SortBy } from '../types/SortBy';
import { getDiscountPercent, getOrderOption } from '../utils/helpers';
import { OrderItem } from 'sequelize';

export async function getAll() {
  const products = await Product.findAll();

  return products;
}

export async function getPage(page = 1, count = 8, category: Category, sort: SortBy, query = '') {
  const products = await Product.findAndCountAll({
    where: {
      category,
    },
    order: [getOrderOption(sort) as OrderItem],
    limit: count,
    offset: count * (page - 1),
  });

  return {
    data: products.rows,
    pages: Math.ceil(products.count / count),
  };
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