import { Phone } from '../models/Phone';
import { Product } from '../models/Product';
import sequelize from 'sequelize';

function getDiscountPercent(price: number, fullPrice: number) {
  return 100 - price * 100 / fullPrice;
}

export function getAll() {
  return Product.findAll();
}

export function getPage(page = 1, count = 8) {
  return Product.findAll({
    limit: count,
    offset: count * (page - 1),
  });
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
    .filter(product => !product.itemId.includes(id.split('-').slice(0, -2).join('-')))
    .slice(0, 10);

  return recommended;
}