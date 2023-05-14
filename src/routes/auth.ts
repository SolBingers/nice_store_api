import express from 'express';
import * as authController from '../controllers/auth';
import { catchError } from '../utils/catchError';

export const router = express.Router();

router.post('/registration', catchError(authController.register));
router.get('/activation/:activationToken', catchError(authController.activate));
router.post('/login', catchError(authController.login));
router.get('/refresh', catchError(authController.refresh));