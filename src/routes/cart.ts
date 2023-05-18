import express from 'express';
import { catchError } from '../utils/catchError';
import * as cartController from '../controllers/cart';

export const router = express.Router();

router.get('/:userId', catchError(cartController.getByUSerId));
router.post('/', catchError(cartController.addOne));
router.delete('/:id', catchError(cartController.deleteOne));
router.patch('/:id', catchError(cartController.updateOne));
