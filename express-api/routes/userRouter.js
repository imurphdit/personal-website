const express = require('express')
const userRouter = express.Router()
const { getUsers, createUser, deleteUser, getUser, changeUser } = require('../controlla/userController')

userRouter.use(express.json())
userRouter.use(express.urlencoded({extended: false}))

userRouter.get('/', async (req, res) => {
    const users = await getUsers()
    res.json(users)
})

userRouter.get('/:id', async (req, res) => {
    const user = await getUsers(req.params.id)
    res.json(user)
})

userRouter.post('/', async (req, res) => {
    const user = await createUser(req.body)
    res.json(user)
})

userRouter.delete('/:id', async (req, res) => {
    const user = await deleteUser(req.params.id)
    res.json(user)
})

userRouter.put('/:id', async (req, res) => {
    const user = await changeUser(req.params.id, req.body)
    res.json(user)
})

module.exports = userRouter