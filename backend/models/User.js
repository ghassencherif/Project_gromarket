const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  isVerified: { type: Boolean, default: false },
  email: String,
  emailToken: String,
  address: String,
  password: String,
  surveys: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "answer",
      autopopulate: true,
    },
  ],
});

const surveySchema = new mongoose.Schema({
  question: String,
  questionResponces: [{type: String}]
});

const answerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  question: String,
  responce: String
});


User = mongoose.model("user", userSchema);
Survey = mongoose.model("survey", surveySchema);
Answer = mongoose.model("answer", answerSchema);


module.exports = {
  User, Survey, Answer
};
