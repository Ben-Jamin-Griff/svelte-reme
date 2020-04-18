import { Model, DataTypes } from 'sequelize'

import { sequelize } from '../database.js'

class Project extends Model {}

Project.init({
        id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
        },
        picture: {
                type: DataTypes.STRING,
                allowNull: false
        },
        university: {
                type: DataTypes.STRING,
                allowNull: false
        },
        title: {
                type: DataTypes.STRING,
                allowNull: false
        },
        description: {
                type: DataTypes.STRING,
                allowNull: false
        },
        creator: {
                type: DataTypes.STRING,
                allowNull: false
        }}, {
                sequelize,
                modelName: 'projects',
                timestamps: false
        })

export default Project
