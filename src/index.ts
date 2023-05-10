import { Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';
import { initDB } from './initDB';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const sequelize = initDB();

app.get('/', (req: Request, res: Response) => {
  res.send('Nice store api');
});

app.use('/static', express.static('public'));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});