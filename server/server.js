const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_PORT = process.env.CLIENT_PORT || 3000;

// Middlewares
app.use(cors({
  origin: `http://localhost:${CLIENT_PORT}`,  // Allow only your frontend
  credentials: true,
}));
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api", require("./router/auth-router"));

// Server listen
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
