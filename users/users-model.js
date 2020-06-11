const db = require("../data/db-config.js");

module.exports = {
  getUsers,
  addUsers,
  removeUsers,
};

function getUsers() {
  return db("users");
}

function addUsers(user) {
  return db("users").insert(user);
}

function removeUsers(user) {
  return db("users").delete(user);
}
