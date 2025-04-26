const express = require('express')
const sequelize = require('./config.js')
const userRouter = require('./routes/userRouter.js')
const runRouter = require('./routes/runRouter.js')
const gameRouter = require('./routes/gameRouter.js')

const app = express()
const port = 3000

//Database connection
sequelize.sync({ force: true });

//Admin Page
app.get('/api', (req, res) => {
    res.sendFile('./static/index.html', {root: __dirname })
})


//API Routes
app.use('/api/users', userRouter)
app.use('/api/runs', runRouter)
app.use('/api/games', gameRouter)


app.listen(port, () => {
    console.log(`Running on port ${port}`)
})