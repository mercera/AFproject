const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const courses = require("./routes/api/courses");

const app = express();

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB succesfully connected"))
  .catch(err => console.log(err));

app.use("/api/users", users);
app.use("/api/courses", courses);

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
