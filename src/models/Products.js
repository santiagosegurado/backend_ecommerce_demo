import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../db";
import { User } from "./Users";

export const Products = sequelize.define("Product", {
  
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description:{
    type: DataTypes.TEXT,
  },

});

