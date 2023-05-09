import { initDB } from "./initDB"
import { Phone } from "./models/Phone";
import { Product } from "./models/Product";

const syncDB = async () => {
  console.log('Start syncing');
  initDB();

  await Phone.sync({ alter: true });
  await Product.sync({ alter: true });

  console.log('Tables successfully synced');
}

syncDB();