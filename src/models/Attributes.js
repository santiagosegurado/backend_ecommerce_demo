import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../db";
import { Products } from "./Products";


export const Attributes = sequelize.define('Attributes',{
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  value:{
    type: DataTypes.STRING,
    allowNull: false,
  }
})

Attributes.belongsToMany(Products, { through: 'AttributesProducts' });
Products.belongsToMany(Attributes, { through: 'AttributesProducts' });