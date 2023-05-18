import { DataTypes } from 'sequelize';
import { 
  Table, 
  Model, 
  Column, 
  AllowNull 
} from 'sequelize-typescript';

@Table({})
export class Order extends Model {
  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    userId: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.JSON)
  })
    products: { productId: string, count: number }[];

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    address: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER
  })
    totalPrice: number;
}