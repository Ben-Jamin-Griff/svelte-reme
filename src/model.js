import { Sequelize, Model, DataTypes } from 'sequelize'
import { user, password, host, database } from './database.js'
import bcrypt from 'bcrypt'

export const sequelize = new Sequelize(database, user, password, {
        host,
        dialect: 'postgres',
        logging: false
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export class User extends Model {}

User.init({
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'user',
  timestamps: false,
})

