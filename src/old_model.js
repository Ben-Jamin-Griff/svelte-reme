import { Sequelize, Model, DataTypes } from 'sequelize'
import { user, password, host, database } from './database.js'
import bcrypt from 'bcrypt'


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
  hooks: {
    beforeCreate: async user => {
      const saltRounds = 10
      const salt = await bcrypt.genSalt(saltRounds)
      user.password = await bcrypt.hash(user.password, salt)
    }
  }
})

User.prototype.isPasswordValid = async function(password) {
  return await bcrypt.compare(password, this.password)
}
