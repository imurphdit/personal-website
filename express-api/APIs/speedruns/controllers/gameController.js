const Sequelize = require('sequelize')
const Game = require('../models/gameModel')

const getGames = async () => {
    const games = await Game.findAll()
    return games
}

const getGame = async (id) => {
    const game = await Game.findByPk(id)
    return game
}

const createGame = async (game) => {
    const createdGame = await Game.create(game)
    return createdGame
}

const deleteGame = async (id) => {
    const deletedGame = await Game.destroy({
        where: {
            id: id,
        }
    })
    return deletedGame
}

const changeGame = async (id, changes) => {
    const game = await Game.update(
        changes,
        {
            where: {
                id: id,
            }
        }
    )
    return game
}

module.exports = { getGames, getGame, createGame, deleteGame, changeGame }