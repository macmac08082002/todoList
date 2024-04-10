const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://todolist:Hongduc882002@atlascluster.pnpwaju.mongodb.net/todolist?retryWrites=true&w=majority&appName=AtlasCluster",
      {}
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
