const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config.js')

class User extends Model {}

User.init ({
    firstName: DataTypes.STRING,
    userName: DataTypes.STRING,
}, 
{
    sequelize,
    modelName: 'User',
})

module.exports = User