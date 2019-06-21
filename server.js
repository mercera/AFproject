const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const upload=require('express-fileupload');


const users = require("./routes/api/users");
const exams = require("./routes/api/exams");
const student=require("./routes/api/students");

const app = express();

app.use(bodyParser.json());

//upload middleware
app.use(upload());


const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB succesfully connected"))
  .catch(err => console.log(err));

app.use("/api/users", users);
app.use("/api/exams", exams);
app.use("/api/student",student);


const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
