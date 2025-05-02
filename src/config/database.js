const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://manojl0430:1RT0J6jq7HilaZTt@learningmongo.p46dh.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
