const express = require("express");
const router = express.Router();

const User = require("../../models/user");

router.post("/", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "email already exists" });
    } else {
      const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });

      newUser.save().then(user => res.json(user));
    }
  });
});

router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      if (user.password == req.body.password) {
        return res.status(200).send(user);
      } else {
        return res.status(400).json({ fail: "Incorrect Password" });
      }
    } else {
      return res.status(400).json({ email: "email does not exist" });
    }
  });
});

router.get("/admin", (req, res) => {
  User.find(function(err, users) {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

module.exports = router;
