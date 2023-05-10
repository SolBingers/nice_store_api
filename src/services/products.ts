import { Phone } from '../models/Phone';
import { Product } from '../models/Product';
import sequelize from 'sequelize';

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
  return Product.findAll();
}
