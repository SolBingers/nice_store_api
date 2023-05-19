import express from 'express';
import { catchError } from '../utils/catchError';
import * as favoritesController from '../controllers/favorites';

export const router = express.Router();

router.get('/:userId', catchError(favoritesController.getByUserId));
router.post('/', catchError(favoritesController.addOne));
