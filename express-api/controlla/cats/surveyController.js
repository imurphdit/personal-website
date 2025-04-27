const Sequelize = require('sequelize')
const Survey = require('../../models/cats/surveyModel')

const getSurveys = async () => {
    try {
        const surveys = await Survey.findAll()
        return surveys
    } catch (error) {
        console.error('Error getting surveys:', error)
        throw error;
    }
}

const addSurvey = async (survey) => {
    try {
        const addedSurvey = await Survey.create(survey)
        return addedSurvey
    } catch (error) {
        console.error('Error adding survey:', error)
        throw error;
    }
}
module.exports = { getSurveys, addSurvey }