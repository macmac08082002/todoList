const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
const connectDB = require("./config/db");
const cors = require("cors"); // Import cors module

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Sử dụng cors middleware để cấu hình CORS
app.use(cors());

app.use("/api/todos", todoRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
