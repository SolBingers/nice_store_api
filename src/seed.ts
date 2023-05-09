import allPhones from '../api/allPhones.json';
import allProducts from '../api/allProducts.json';
import { initDB } from './initDB';
import { Phone } from './models/Phone';
import { Product } from './models/Product';

initDB();

Promise.all(allPhones.map(phone => Phone.create(phone)))
  .then(() => console.log('Success'))
  .catch(error => console.log(error.message));

Promise.all(allProducts.map(product => Product.create(product)))
  .then(() => console.log('Success'))
  .catch(error => console.log(error.message));
