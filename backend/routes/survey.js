const express = require('express')

const surveyControlleur = require('../controllers/survey.controlleur')
const Router = express.Router()

Router.post('/admin/addSurvey', surveyControlleur.addSurvey)
Router.delete('/admin/deleteSurvey/:_id', surveyControlleur.deleteSurvey)
Router.put('/admin/editeSurvey/:surveyId', surveyControlleur.editSurvey)
Router.get('/admin/getAllSurvey', surveyControlleur.getAllSurvey)

Router.post('/profile/:id', surveyControlleur.answerSurvey)

module.exports = Router