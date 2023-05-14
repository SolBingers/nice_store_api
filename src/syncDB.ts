import { initDB } from './initDB';
import { Accessory } from './models/Accessory';
import { Phone } from './models/Phone';
import { Product } from './models/Product';
import { Tablet } from './models/Tablet';
import { Token } from './models/Token';
import { User } from './models/User';

const syncDB = async () => {
  console.log('Start syncing');
  initDB();

  await Phone.sync({ alter: true });
  await Tablet.sync({ alter: true });
  await Accessory.sync({ alter: true });
  await Product.sync({ alter: true });
  await User.sync({ alter: true });
  await Token.sync({ alter: true });

  console.log('Tables successfully synced');
};

syncDB();
