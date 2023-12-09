const mongoose = require("mongoose");

const connect_db = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/node_db");
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connect_db;

