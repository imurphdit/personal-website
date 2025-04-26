const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../../config')

class Survey extends Model {}

Survey.init ({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    behavior: DataTypes.STRING,
    cat: DataTypes.STRING,
    effect: DataTypes.JSON,
    notes: DataTypes.STRING,
}, 
{
    sequelize,
    modelName: 'Survey',
})

module.exports = Survey