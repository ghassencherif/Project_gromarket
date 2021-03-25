const { ObjectID } = require("mongodb");
const { User, Survey, Answer } = require("../models/User");
const { surveyConfirmation } = require("./emailSercives");

module.exports = surveyController = {
  getAllSurvey: async (req, res) => {
    try {
      const allSurvey = await Survey.find();
      res.status(200).json(allSurvey);
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
  addSurvey: async (req, res) => {
    const { question, questionResponces, answerType } = req.body;
    try {
      const newSurvey = new Survey({
        question,
        questionResponces,
        answerType,
      });
      const addSurvey = await newSurvey.save();
      res.status(200).json(addSurvey);
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },

  deleteSurvey: async (req, res) => {
    const { _id } = req.body;
    try {
      const deleteResult = await Survey.findOneAndDelete({ _id: _id });
      if (deleteResult) return res.status(200).json({ msg: "survey deleted" });
      else return res.status(400).json({ errors: error });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
  editSurvey: async (req, res) => {
    const _id = ObjectID(req.params.surveyId);
    const { question, questionResponces } = req.body;
    console.log(questionResponces);
    try {
      const editResult = await Survey.findOneAndUpdate(
        { _id: _id },
        { $set: { question: question, questionResponces: questionResponces } },
        { new: true }
      );
      if (editResult)
        return res.status(200).json({ _id, question, questionResponces });
      else return res.status(400).json({ errore: error });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
  answerSurvey: async (req, res) => {
    const userId = ObjectID(req.params.id);
    const { question, responce } = req.body;
    try {
      const newAnswer = new Answer({
        question,
        responce,
      });
      try {
        Answer.create(newAnswer, (err, doc) => {
          if (err) res.status(503).json({ errors: error });
          else {
            User.findByIdAndUpdate(
              userId,
              { $push: { surveys: doc } },
              { new: true },
              (err, data) => {
                if (err) res.status(504).json({ errors: error });
                else {
                  res.status(200).json(newAnswer);
                }
              }
            );
          }
        });
      } catch (error) {
        res.status(500).json({ errors: error });
      }
    } catch (error) {
      res.status(501).json({ errors: error });
    }
  },
  confirmSurvey: async (req, res) => {
    const { email } = req.body;
    try {
      surveyConfirmation(email);
      res.status(200).json("confirmation e-mail send with success");
    } catch (error) {
      res.status(501).json({ errors: error });
    }
  },
};
