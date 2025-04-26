const express = require('express')
const gameRouter = express.Router()
const { getGames, createGame, deleteGame, getGame, changeGame } = require('../controlla/gameController')

gameRouter.use(express.json())
gameRouter.use(express.urlencoded({extended: false}))

gameRouter.get('/', async (req, res) => {
    const games = await getGames()
    res.json(games)
})

gameRouter.get('/:id', async (req, res) => {
    const game = await getGame(req.params.id)
    res.json(game)
})

gameRouter.post('/', async (req, res) => {
    const game = await createGame(req.body)
    res.json(game)
})

gameRouter.delete('/:id', async (req, res) => {
    const game = await deleteGame(req.params.id)
    res.json(game)
})

gameRouter.put('/:id', async (req, res) => {
    const game = await changeGame(req.params.id, req.body)
    res.json(game)
})

module.exports = gameRouter