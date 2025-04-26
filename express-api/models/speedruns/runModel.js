const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../../config.js')

class Run extends Model {}

Run.init ({
    userName: DataTypes.STRING,
    game: DataTypes.STRING,
}, 
{
    sequelize,
    modelName: 'Run',
})

module.exports = Run