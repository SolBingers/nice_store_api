import { Cart } from '../models/Cart';
import { Product } from '../models/Product';
import { Op } from 'sequelize';

export async function getByUserId(userId: string) {
  const favorites = await Cart.findAll({
    where: {
      userId
    }
  });

  const productIds = favorites.map(favourite => ({ id: favourite.productId }));

  const products = await Product.findAll({
    where: {
      [Op.or]: productIds
    }
  });

  const modified = products.map(product => ({
    ...product.dataValues,
    count: favorites.find(favorite => favorite.productId === product.id)?.count
  }));

  return { userId, products: modified };
}

export function addOne(userId: string, productId: string) {
  return Cart.create({
    userId,
    productId,
    count: 1
  });
}

export function getById(id: number) {
  return Cart.findByPk(id);
}

export function deleteOne(id: number) {
  return Cart.destroy({
    where: { id }
  });
}

export function updateOne(id: number, data: object) {
  return Cart.update(data, {
    where: { id }
  });
}
