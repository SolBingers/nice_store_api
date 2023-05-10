import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { initDB } from './initDB';
import * as productsRouter from './routes/products';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

initDB();

app.use(cors());
app.use('/products', productsRouter.router);
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});