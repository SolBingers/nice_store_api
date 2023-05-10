import * as productsController from '../controllers/products';
import express from 'express';

export const router = express.Router();

router.get('/', productsController.getAll);
router.get('/new', productsController.getNew);
router.get('/discount', productsController.getDiscount);
// router.get('/:itemId', productsController.getOne);
router.get('/:itemId/recommended', productsController.getRecommended);