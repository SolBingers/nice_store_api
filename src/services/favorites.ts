import { Favorite } from '../models/Favorite';

export async function getByUserId(userId: string) {
  return Favorite.findOne({
    where: {
      userId
    }
  });
}

export function createOne(userId: string, itemIds: string[]) {
  return Favorite.create({
    userId,
    itemIds,
  });
}

export function addOne(userId: string, itemIds: string[]) {
  return Favorite.update({ itemIds }, {
    where: {
      userId
    }
  });
}

