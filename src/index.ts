import { Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { initDB } from './initDB';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

initDB();



app.use(cors());
app.use('/static', express.static(path.join(__dirname, '../public')));

app.get('/', (req: Request, res: Response) => {
  res.send('Nice store api');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});