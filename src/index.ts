import { Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { initDB } from './initDB';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

initDB();


app.use(cors());
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.send('Nice store api');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});