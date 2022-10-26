import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../db";
import { Products } from "./Products";

export const User = sequelize.define("User", {
  
  id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password:{
    type: DataTypes.TEXT,
    allowNull: false
  },
  perfil:{
    type: DataTypes.ENUM,
    values: ['Client', 'Admin']
  }
},{
  timestamps: false,
});
