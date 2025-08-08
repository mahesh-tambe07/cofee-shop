const { getDB } = require("../config/db");
const { sendWelcomeEmail } = require("../utils/email");
const bcrypt = require("bcryptjs"); // 🔐 For password hashing
require("dotenv").config();

exports.registerUser = async (req, res) => {
  const { name, email, mobile, password } = req.body;
  const db = getDB();

  try {
    // 1️⃣ Validate input (basic)
    if (!name || !email || !mobile || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2️⃣ Check if user already exists
    const [existing] = await db.execute(
      "SELECT * FROM users WHERE email = ? OR mobile = ?",
      [email, mobile]
    );
    if (existing.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 3️⃣ Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4️⃣ Insert new user
    await db.execute(
      "INSERT INTO users (name, email, mobile, password) VALUES (?, ?, ?, ?)",
      [name, email, mobile, hashedPassword]
    );

    // 5️⃣ Send welcome email (optional)
    await sendWelcomeEmail(name, email);

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("❌ Error during user registration:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};
