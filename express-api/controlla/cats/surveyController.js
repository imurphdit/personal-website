const Sequelize = require('sequelize')
const Survey = require('../../models/cats/surveyModel')

const getSurveys = async () => {
    const surveys = await Survey.findAll()
    return surveys
}

const addSurvey = async (survey) => {
    const addedSurvey = await Survey.create(survey)
    return addedSurvey
}

module.exports = { getSurveys, addSurvey }