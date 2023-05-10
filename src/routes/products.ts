import * as productsController from '../controllers/products';
import express from 'express';

export const router = express.Router();

router.get('/', productsController.getAll);
