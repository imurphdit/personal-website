const express = require('express')
const sequelize = require('./config.js')
const speedrunUserRouter = require('./routes/speedruns/userRouter.js')
const spedrunRunRouter = require('./routes/speedruns/runRouter.js')
const speedrunGameRouter = require('./routes/speedruns/gameRouter.js')

const catSurveyRouter = require('./routes/cats/surveyRouter.js')

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

app.get('/api/speedruns/admin', (req, res) => {
    res.sendFile('./static/speedruns-admin.html', {root: __dirname })
})

app.use('/api/speedruns/users', speedrunUserRouter)
app.use('/api/speedruns/runs', spedrunRunRouter)
app.use('/api/speedruns/games', speedrunGameRouter)


// CATS
app.use('/api/cats/survey', catSurveyRouter)

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})