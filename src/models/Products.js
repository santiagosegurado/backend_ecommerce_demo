import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../db";

export const Products = sequelize.define("Product", {
  
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
    unique: true,
  },
  description:{
    type: DataTypes.TEXT,
  },
  img:{
    type: DataTypes.STRING,
    required: true,
  }

});

