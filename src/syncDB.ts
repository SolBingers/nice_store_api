import { initDB } from './initDB';
import { Phone } from './models/Phone';
import { Product } from './models/Product';
import { Token } from './models/Token';
import { User } from './models/User';

const syncDB = async () => {
  console.log('Start syncing');
  initDB();

  await Phone.sync({ alter: true });
  await Product.sync({ alter: true });
  await User.sync({ alter: true });
  await Token.sync({ alter: true });

  console.log('Tables successfully synced');
};

syncDB();
