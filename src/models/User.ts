import { DataTypes } from 'sequelize';
import { 
  Table,
  Model,
  Column,
  AllowNull,
  Unique
} from 'sequelize-typescript';

@Table({})
export class User extends Model {
  @Unique(true)
  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    email: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    password: string;

  @AllowNull(true)
  @Column({
    type: DataTypes.STRING,
  })
    activationToken: string | null;
}