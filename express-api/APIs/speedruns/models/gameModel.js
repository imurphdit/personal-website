const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../../../config')

class Game extends Model {}

Game.init ({
    gameName: DataTypes.STRING,
}, 
{
    sequelize,
    modelName: 'Game',
})

module.exports = Game