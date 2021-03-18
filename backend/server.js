const express = require("express");
const connectDB = require("./config/connectDB");

const supermarket = require('./routes/supermarket')
const user = require('./routes/user')
const app = express();


app.use(express.json());

connectDB();

app.use('/', user, supermarket)



const port = process.env.PORT || 5000;

app.listen(port, err =>
  err
    ? console.err("server is not running")
    : console.log(`server is running on port : ${port}`)
);