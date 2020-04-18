//export const user = 'pi'
//export const password = 'APples.21'
//export const host = 'localhost'
//export const database = 'remeusers'

export const user = 'bjyieroysuxvup'
export const password = '75af05b2125752b7720645fbde7c60cc3a9d1ec4e1870f5a446f30736c5ebebb'
export const host = 'ec2-46-137-84-140.eu-west-1.compute.amazonaws.com'
export const database = 'd4l46g0l1cf4hk'


import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(database, user, password, {
        host,
        dialect: 'postgres',
        logging: false
})

