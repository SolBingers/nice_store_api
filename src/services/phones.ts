import { Phone } from '../models/Phone';

export function getOne(id: string) {
  return Phone.findByPk(id);
}
