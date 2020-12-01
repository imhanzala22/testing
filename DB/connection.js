const mongoose = require("mongoose");

const URI =
  "mongodb+srv://fiasal1234:fiasal069@cluster1.589tu.mongodb.net/cluster1?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("connection done");
};

module.exports = connectDB;
