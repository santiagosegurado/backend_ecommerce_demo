import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../db";
import { Products } from "./Products";
import { User } from "./Users";


export const Orders = sequelize.define('Orders',{
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  }
})


// Associattion
User.belongsToMany(Products, { through: Orders });
Products.belongsToMany(User, { through: Orders });