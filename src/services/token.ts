import { Token } from '../models/Token';

export async function save(userId: number, refreshToken: string) {
  const token = await Token.findOne({
    where: { userId }
  });

  if (token) {
    token.refreshToken = refreshToken;

    await token.save();

    return;
  }

  await Token.create({ userId, refreshToken });
}

export function getByToken(refreshToken: string) {
  return Token.findOne({
    where: { refreshToken }
  });
}

export async function remove(userId: number) {
  return Token.destroy({
    where: { userId }
  });
}