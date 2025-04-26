const express = require('express')
const surveyRouter = express.Router()
const { addSurvey, getSurveys } = require('../../controlla/cats/surveyController')

surveyRouter.use(express.json())
surveyRouter.use(express.urlencoded({extended: false}))

surveyRouter.get('/', async (req, res) => {
    const survey = await getSurveys()
    res.json(survey)
})


surveyRouter.post('/', async (req, res) => {
    console.log(req.body)
    const survey = await addSurvey(req.body)
    res.json(survey)
})

module.exports = surveyRouter