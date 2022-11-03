import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../db";

export const User = sequelize.define("User", {
  
  id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  firts_name: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
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
  isAdmin:{
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
},{
  timestamps: false,
});
