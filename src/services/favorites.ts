import { Op } from 'sequelize';
import { Favorite } from '../models/Favorite';
import { Product } from '../models/Product';

export async function getByUserId(userId: string) {
  const favorites = await Favorite.findAll({
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

  return { userId, products };
}

export function addOne(userId: string, productId: string) {
  return Favorite.create({
    userId,
    productId,
  });
}

export function deleteOne(id: number) {
  return Favorite.destroy({
    where: { id }
  });
}

export function getById(id: number) {
  return Favorite.findByPk(id);
}
