import { Sequelize } from 'sequelize-typescript';
import { Phone } from './models/Phone';
import { Product } from './models/Product';
import 'dotenv/config.js';
import { User } from './models/User';
import { Token } from './models/Token';

const { DB_URI = '' } = process.env;

export const initDB = async () => {
  const sequelize = new Sequelize(DB_URI, {
    models: [Phone, Product, User, Token],
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
