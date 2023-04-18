const mongoose = require("mongoose");
require("dotenv").config();

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/test");

      console.log("MongoDB connect success");
    } catch (error) {
      console.log(error.message);
      console.log("MongoDB connect fail");
      process.exit(1);
    }
  }
}
module.exports = new Database();
