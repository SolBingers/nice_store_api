import { Product } from '../models/Product';
import lodash from 'lodash';
import { SortBy } from '../types/SortBy';
import { getDiscountPercent, getOrderOption } from '../utils/helpers';
import { OrderItem } from 'sequelize';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

export async function getAll() {
  const products = await Product.findAll();

  return products;
}

export async function getPage(page = 1, count = 6, sort: SortBy, query = '') {
  const products = await Product.findAndCountAll({
    where: {
      itemId: {
        [Op.like]: `%${query}%`
      }
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

export async function getPhonesPage(page = 1, count = 6, sort: SortBy, query = '') {
  console.log(query);
  const phones = await Product.findAndCountAll({
    where: {
      category: 'phones',
      itemId: {
        [Op.like]: `%${query}%`
      }
    },
    order: [getOrderOption(sort) as OrderItem],
    limit: count,
    offset: count * (page - 1),
  });

  return {
    data: phones.rows,
    pages: Math.ceil(phones.count / count),
  };
}

export async function getTabletsPage(page = 1, count = 6, sort: SortBy, query = '') {
  const tablets = await Product.findAndCountAll({
    where: {
      category: 'tablets',
      itemId: {
        [Op.like]: `%${query}%`
      }
    },
    order: [getOrderOption(sort) as OrderItem],
    limit: count,
    offset: count * (page - 1),
  });

  return {
    data: tablets.rows,
    pages: Math.ceil(tablets.count / count),
  };
}

export async function getAccessoriesPage(page = 1, count = 6, sort: SortBy, query = '') {
  const accessories = await Product.findAndCountAll({
    where: {
      category: 'accessories',
      itemId: {
        [Op.like]: `%${query}%`
      }
    },
    order: [getOrderOption(sort) as OrderItem],
    limit: count,
    offset: count * (page - 1),
  });

  return {
    data: accessories.rows,
    pages: Math.ceil(accessories.count / count),
  };
}

export function getOne(itemId: string) {
  return Product.findOne({
    where: { itemId }
  });
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
      return !id.split('-').slice(0, -2).join('-').includes(product.itemId);
    });

  return lodash.shuffle(recommended).slice(0, 10);
}