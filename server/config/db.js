const mysql = require("mysql2/promise");
require("dotenv").config(); // 🟢 Ensure this is here!

let db;

const connectDB = async () => {
  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });
    console.log("✅ MySQL Connected");
  } catch (err) {
    console.error("DB Connection Error ❌", err);
    process.exit(1);
  }
};

const getDB = () => db;

module.exports = connectDB;
module.exports.getDB = getDB;
