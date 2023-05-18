import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { initDB } from './initDB';
import * as productsRouter from './routes/products';
import * as favoritesRouter from './routes/favorites';
import * as cartRouter from './routes/cart';
import * as ordersRouter from './routes/orders';
import { errorMiddleware } from './middlewares/error';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

initDB();

app.use(cors());
app.use(express.json());

app.use('/products', productsRouter.router);

app.use('/favorites', favoritesRouter.router);

app.use('/cart', cartRouter.router);

app.use('/orders', ordersRouter.router);

app.use(express.static('public'));

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});