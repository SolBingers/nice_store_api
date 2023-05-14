import * as jwtService from '../services/jwt';
import { ApiError } from '../exceptions/ApiError';

export function authMiddleware(req, res, next) {
  const authHeader = req.headers('authorization');

  if (!authHeader) {
    throw ApiError.Unauthorised();
  }

  const [, accessToken] = authHeader.split(' ');

  if (!accessToken) {
    throw ApiError.Unauthorised();
  }

  const userData = jwtService.validateAccessToken(accessToken);

  if (!userData) {
    throw ApiError.Unauthorised();
  }

  next();
}