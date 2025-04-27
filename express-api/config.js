const { Sequelize, Model, DataTypes } = require('sequelize');
const path = require('path');

//connection
const sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'database.sqlite')
})

module.exports = sequelize