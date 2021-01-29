const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes/apiRoute.js");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workouts",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

// routes
app.use(router);
require("./routes/htmlRoute.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});