const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connect = () => {
  return mongoose.connect(process.env.MONGOURL);
};

module.exports = connect;