const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const router = require("./routes/apiRoute");

const PORT = process.env.PORT || 3000;

const workout = require("./models");

const app = express();
app.use(logger("dev"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workouts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

//routes
app.use(require("./routes/apiRoute.js"));
app.use(require("./routes/htmlRoute.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});