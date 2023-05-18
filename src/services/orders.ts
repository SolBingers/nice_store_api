import { Order } from '../models/Order';
import { Product } from '../models/Product';
import { Op } from 'sequelize';

export async function getByUserId(userId: string) {
  const orders = await Order.findAll({
    where: { userId }
  });

  const products = orders.reduce((acc: { productId: string, count: number }[], order) => {
    order.products.forEach(product => {
      acc.push(product);
    });

    return acc;
  }, []);

  const productIds = products.map(product => ({ id: product.productId }));

  const productsData = await Product.findAll({
    where: {
      [Op.or]: productIds
    }
  });

  const modified = productsData.map(data => ({
    ...data.dataValues,
    count: products.find(product => product.productId === data.id)?.count
  }));

  const resultOrders = orders.map(order => ({
    ...order.dataValues,
    products: modified
  }));

  return resultOrders;
}

export function addOne(userId: string, products: object[], address: string, totalPrice: number) {
  return Order.create({
    userId,
    products,
    address,
    totalPrice
  });
}
