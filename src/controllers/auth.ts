import { v4 } from 'uuid';
import { Request, Response } from 'express';
import { User } from '../models/User';
import * as emailService from '../services/email';
import * as authService from '../services/auth';
import * as jwtService from '../services/jwt';
import { ApiError } from '../exceptions/ApiError';
import bcrypt from 'bcrypt';
import * as tokenService from '../services/token';

export const sendAuthentication = async (res: Response, user: User) => {
  const accessToken = jwtService.generateAccessToken(user);
  const refreshToken = jwtService.generateRefreshToken(user);

  await tokenService.save(user.id, refreshToken);

  res.cookie('refreshToken', refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });

  res.send({
    user,
    accessToken
  });
};

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const existingUser = await authService.getByEmail(email);

  if (existingUser) {
    throw ApiError.BadRequest('Email is already taken', {
      email: 'Email is already taken',
    });
  }

  const activationToken = v4();
  const hash = await bcrypt.hash(password, 10);

  await User.create({ 
    email, 
    password: hash, 
    activationToken 
  });

  await emailService.sendActivationLink(email, activationToken);
  
  res.send({ message: 'OK' });
};

export const activate = async (req: Request, res: Response) => {
  const { activationToken } = req.params;

  const user = await User.findOne({
    where: { activationToken }
  });

  if (!user) {
    res.sendStatus(404);

    return;
  }

  user.activationToken = null;
  await user.save();

  await sendAuthentication;
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await authService.getByEmail(email);

  if (!user) {
    throw ApiError.BadRequest('User with this email does not exist', {
      email: 'Invalid email',
    });
  }

  if (user.activationToken) {
    throw ApiError.BadRequest('User is not activated', {});
  }

  const isPasswordValid = bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw ApiError.BadRequest('Password is wrong', {
      password: 'Password is wrong'
    });
  }

  await sendAuthentication(res, user);
};

export const refresh = async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  const userData = jwtService.validateRefreshToken(refreshToken) as User;

  if (!userData) {
    throw ApiError.Unauthorised();
  }

  const token = await tokenService.getByToken(refreshToken);

  if (!token) {
    throw ApiError.Unauthorised();
  }

  const user = await authService.getByEmail(userData.email);

  if (!user) {
    throw ApiError.BadRequest('User with this email does not exist', {
      email: 'Invalid email',
    });
  }

  await sendAuthentication(res, user);
};

export const logout = async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;
  const userData = jwtService.validateRefreshToken(refreshToken) as User;

  res.clearCookie('refreshToken');

  if (userData) {
    await tokenService.remove(userData.id);
  }

  res.sendStatus(204);
};
