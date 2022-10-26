import { Sequelize } from 'sequelize';
import { config} from 'dotenv';
config();


export const sequelize = new Sequelize('ecommerce-santiago', 'postgres', 'Santi1234', {
  host: 'localhost',
  dialect: 'postgres'
});

