import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { initDB } from './initDB';
import * as productsRouter from './routes/products';
import * as authRouter from './routes/auth';
import { errorMiddleware } from './middlewares/error';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

initDB();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(authRouter.router);

app.use('/products', express.json(), productsRouter.router);

app.use(express.static('public'));

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});