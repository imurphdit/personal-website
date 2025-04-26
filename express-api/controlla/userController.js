const Sequelize = require('sequelize')
const User = require('../models/userModel')

const getUsers = async () => {
    const users = await User.findAll()
    return users
}

const getUser = async (id) => {
    const user = await User.findByPk(id)
    return user
}

const createUser = async (user) => {
    const createdUser = await User.create(user)
    return createdUser
}

const deleteUser = async (id) => {
    const deletedUser = await User.destroy({
        where: {
            id: id,
        }
    })
    return deletedUser
}

const changeUser = async (id, changes) => {
    const user = await User.update(
        changes,
        {
            where: {
                id: id,
            }
        }
    )
    return user
}

module.exports = { getUsers, getUser, createUser, deleteUser, changeUser }