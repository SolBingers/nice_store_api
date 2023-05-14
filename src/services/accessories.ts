import { Accessory } from '../models/Accessory';

export function getOne(id: string) {
  return Accessory.findByPk(id);
}