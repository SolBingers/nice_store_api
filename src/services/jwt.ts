import jwt from 'jsonwebtoken';
import { User } from '../models/User';

const JWT_ACCESS_SECRET = 'dsfgfdhgffhfghdfjhgkj';
const JWT_REFRESH_SECRET = 'fdgfhgjhkjldsueuwbxbbx13';

export function generateAccessToken(user: User) {
  return jwt.sign(user.toJSON(), JWT_ACCESS_SECRET, { expiresIn: '10m' });
}

export function generateRefreshToken(user: User) {
  return jwt.sign(user.toJSON(), JWT_REFRESH_SECRET, { expiresIn: '30d' });
}

export function validateAccessToken(token: string) {
  try {
    return jwt.verify(token, JWT_ACCESS_SECRET);
  } catch (error) {
    return null;
  }
}

export function validateRefreshToken(token: string) {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET);
  } catch (error) {
    return null;
  }
}