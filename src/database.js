export const user = 'pi'
export const password = 'APples.21'
export const host = 'localhost'
export const database = 'remeusers'

import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(database, user, password, {
        host,
        dialect: 'postgres',
        logging: false
})

