const express = require("express");
const router = express.Router();

const Course = require("../../models/course");

router.post("/addCourse", (req, res) => {
  const newcourse = new Course({
    coursecode: req.body.coursecode,
    coursename: req.body.coursename,
    lecturer: req.body.lecturer
  });
  newcourse.save();
});

module.exports = router;
