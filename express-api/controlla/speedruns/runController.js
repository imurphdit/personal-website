const Sequelize = require('sequelize')
const Run = require('../../models/speedruns/runModel')

const getRuns = async () => {
    const runs = await Run.findAll()
    return runs
}

const getRun = async (id) => {
    const run = await Run.findByPk(id)
    return run
}

const createRun = async (run) => {
    const createdRun = await Run.create(run)
    return createdRun
}

const deleteRun = async (id) => {
    const deletedRun = await Run.destroy({
        where: {
            id: id,
        }
    })
    return deletedRun
}

const changeRun = async (id, changes) => {
    const run = await Run.update(
        changes,
        {
            where: {
                id: id,
            }
        }
    )
    return run
}

module.exports = { getRuns, getRun, createRun, deleteRun, changeRun }