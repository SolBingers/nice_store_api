import phones from './api/phones.json';
import tablets from './api/tablets.json';
import accessories from './api/accessories.json';
import products from './api/products.json';

import { initDB } from './initDB';
import { Phone } from './models/Phone';
import { Product } from './models/Product';
import { Tablet } from './models/Tablet';
import { Accessory } from './models/Accessory';

initDB();

Promise.all(phones.map(phone => Phone.create(phone)))
  .then(() => console.log('Success'))
  .catch(error => console.log(error.message));

Promise.all(tablets.map(tablet => Tablet.create(tablet)))
  .then(() => console.log('Success'))
  .catch(error => console.log(error.message));

Promise.all(accessories.map(accessory => Accessory.create(accessory)))
  .then(() => console.log('Success'))
  .catch(error => console.log(error.message));

Promise.all(products.map(product => Product.create(product)))
  .then(() => console.log('Success'))
  .catch(error => console.log(error.message));