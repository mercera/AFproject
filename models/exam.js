const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExamSchema = new Schema(
  {
    examname: {
      type: String,
      required: true
    },
    coursename: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    duedate:{
        type:Date,
        required:true
    }
  },
  { collection: "exams" }
);

module.exports = User = mongoose.model("exam", ExamSchema);
