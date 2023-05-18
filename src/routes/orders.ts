import express from 'express';
import { catchError } from '../utils/catchError';
import * as ordersController from '../controllers/orders';

export const router = express.Router();

router.get('/:userId', catchError(ordersController.getByUserId));
router.post('/', catchError(ordersController.addOne));
