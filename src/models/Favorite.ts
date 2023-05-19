import { DataTypes } from 'sequelize';
import { 
  Table, 
  Model, 
  Column, 
  AllowNull 
} from 'sequelize-typescript';

@Table({})
export class Favorite extends Model {
  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING)
  })
    itemIds: string[];

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING
  })
    userId: string;
}