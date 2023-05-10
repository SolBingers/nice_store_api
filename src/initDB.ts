import { Sequelize } from 'sequelize-typescript';
import { Phone } from './models/Phone';
import { Product } from './models/Product';
import 'dotenv/config.js';

// const { DB_URI = '' } = process.env;
const DB_URI = 'postgres://kuznetsova-anastasiia:k5PBypHRAz9j@ep-summer-grass-565163.us-east-2.aws.neon.tech/neondb';

export const initDB = async () => {
  const sequelize = new Sequelize(DB_URI, {
    models: [Phone, Product],
    dialectOptions: {
      ssl: true,
    },
  });

  try {
    await sequelize.authenticate();

    console.log('Connected to DB');
  } catch (err) {
    console.log('Failed connection to DB');
  }

  return sequelize;
};
