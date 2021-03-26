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
  images: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "photo",
    autopopulate: true,
  },],
});

const surveySchema = new mongoose.Schema({
  question: String,
  questionResponces: [{type: String}],
  answerType: String
});

const answerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  question: String,
  responce: [{type: String}]
});

const imageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {type: String, trim: true, require: true},
  path: {type: String, trim: true, require: true}
});


User = mongoose.model("user", userSchema);
Survey = mongoose.model("survey", surveySchema);
Answer = mongoose.model("answer", answerSchema);
Photo = mongoose.model("photo", imageSchema);


module.exports = {
  User, Survey, Answer, Photo
};
