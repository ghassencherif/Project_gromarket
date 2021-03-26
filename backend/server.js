const express = require("express");
const connectDB = require("./config/connectDB");

const supermarket = require('./routes/supermarket')
const user = require('./routes/user')
const survey = require('./routes/survey')
const app = express();

app.use('/uploads', express.static('uploads'))

app.use(express.json());

connectDB();

app.use('/', user,survey, supermarket)



const port = process.env.PORT || 5000;

app.listen(port, err =>
  err
    ? console.err("server is not running")
    : console.log(`server is running on port : ${port}`)
);