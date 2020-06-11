const express = require("express");

const Users = require("./users-model.js");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  Users.getUsers()
    .then((users) => {
      res.status(200).json(
        users.map((user) => {
          return { ...user };
        })
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error getting users" });
    });
});

module.exports = userRouter;
