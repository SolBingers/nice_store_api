import * as productsController from '../controllers/products';
import express from 'express';
import { catchError } from '../utils/catchError';

export const router = express.Router();

router.get('/', catchError(productsController.getAll));
router.get('/new', catchError(productsController.getNew));
router.get('/discount', catchError(productsController.getDiscount));
router.get('/:itemId', catchError(productsController.getOne));
router.get('/:itemId/recommended', catchError(productsController.getRecommended));