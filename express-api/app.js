const express = require('express')
const sequelize = require('./config.js')

const speedrunUserRouter = require('./routes/speedruns/userRouter.js')
const spedrunRunRouter = require('./routes/speedruns/runRouter.js')
const speedrunGameRouter = require('./routes/speedruns/gameRouter.js')

const catSurveyRouter = require('./routes/cats/surveyRouter.js')

const massAssassinAgentRouter = require('./routes/massAssassin/agentRouter.js')

const app = express()
const port = 3000

//Database connection
sequelize.sync()
    .then(() => {
        console.log('Database synced')
    })
    .catch((err) => {
        console.error('Error syncing database', err);
    })



// SPEEDRUNS

app.get('/speedruns/admin', (req, res) => {
    res.sendFile('./static/speedruns-admin.html', {root: __dirname })
})

app.use('/speedruns/users', speedrunUserRouter)
app.use('/speedruns/runs', spedrunRunRouter)
app.use('/speedruns/games', speedrunGameRouter)


// CATS
app.use('/cats/survey', catSurveyRouter)


// MASS ASSASSIN
app.get('/massassassin/admin', (req, res) => {
    res.sendFile('./static/massassassin-admin.html', {root: __dirname })
})

app.use('/massassassin/agents', massAssassinAgentRouter)

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})