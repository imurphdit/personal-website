const express = require('express')
const runRouter = express.Router()
const { getRuns, createRun, deleteRun, getRun, changeRun } = require('../controlla/runController')

runRouter.use(express.json())
runRouter.use(express.urlencoded({extended: false}))

runRouter.get('/', async (req, res) => {
    const runs = await getRuns()
    res.json(runs)
})

runRouter.get('/:id', async (req, res) => {
    const run = await getRun(req.params.id)
    res.json(run)
})

runRouter.post('/', async (req, res) => {
    const run = await createRun(req.body)
    res.json(run)
})

runRouter.delete('/:id', async (req, res) => {
    const run = await deleteRun(req.params.id)
    res.json(run)
})

runRouter.put('/:id', async (req, res) => {
    const run = await changeRun(req.params.id, req.body)
    res.json(run)
})

module.exports = runRouter