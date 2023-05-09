import { DataTypes } from 'sequelize';
import { 
  Table,
  Model,
  Column,
  PrimaryKey,
  AllowNull
} from 'sequelize-typescript';

@Table({})
export class Phone extends Model {
  @AllowNull(false)
  @PrimaryKey
  @Column({
    type: DataTypes.STRING,
  })
    id: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    namespaceId: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    name: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING),
  })
    capacityAvailable: string[];

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    capacity: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
    priceRegular: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
    priceDiscount: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING),
  })
    colorsAvailable: string[];

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    color: string;

  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING),
  })
    images: string[];

  @Column({
    type: DataTypes.JSON,
  })
    description: {
      title: string;
      text: string[];
    }[];

  @Column({
    type: DataTypes.STRING,
  })
    screen: string;

  @Column({
    type: DataTypes.STRING,
  })
    resolution: string;

  @Column({
    type: DataTypes.STRING,
  })
    processor: string;

  @Column({
    type: DataTypes.STRING,
  })
    ram: string;

  @Column({
    type: DataTypes.STRING,
  })
    camera: string;

  @Column({
    type: DataTypes.STRING,
  })
    zoom: string;

  @Column({
    type: DataTypes.ARRAY(DataTypes.STRING),
  })
    cell: string[];
}