import { Tablet } from '../models/Tablet';

export function getOne(id: string) {
  return Tablet.findByPk(id);
}