const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    file: {
      type: String,
    }
  },
  { collection: "students" }
);

module.exports = User = mongoose.model("student", StudentSchema);
