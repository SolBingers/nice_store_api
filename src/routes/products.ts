import * as productsController from '../controllers/products';
import express from 'express';
import { catchError } from '../utils/catchError';

export const router = express.Router();

router.get('/', catchError(productsController.getAll));
router.get('/phones', catchError(productsController.getPhones));
router.get('/tablets', catchError(productsController.getTablets));
router.get('/accessories', catchError(productsController.getAccessories));
router.get('/new', catchError(productsController.getNew));
router.get('/discount', catchError(productsController.getDiscount));
router.get('/productcard/:itemId', catchError(productsController.getProductCard));
router.get('/:itemId', catchError(productsController.getOne));
router.get('/:itemId/recommended', catchError(productsController.getRecommended));