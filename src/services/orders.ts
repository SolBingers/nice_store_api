import { Order } from '../models/Order';
import { Product } from '../models/Product';

export async function getByUserId(userId: string) {
  return Order.findAll({
    where: { userId }
  });
}

export function addOne(userId: string, products: Product[], address: string, totalPrice: number) {
  return Order.create({
    userId,
    products,
    address,
    totalPrice
  });
}
