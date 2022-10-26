import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../db";
import { Products } from "./Products";



export const Categories = sequelize.define('Categories',{
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  }
})

Categories.belongsToMany(Products, { through: 'CategoriesProducts' });
Products.belongsToMany(Categories, { through: 'CategoriesProducts' });