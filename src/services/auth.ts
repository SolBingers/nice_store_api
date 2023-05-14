import { User } from '../models/User';

export function getByEmail(email: string) {
  return User.findOne({
    where: { email }
  });
}