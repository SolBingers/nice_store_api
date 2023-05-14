import { DataTypes } from 'sequelize';
import { 
  Table,
  Model,
  Column,
  AllowNull,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from './User';

@Table({})
export class Token extends Model {
  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    refreshToken: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
    userId: number;
}
