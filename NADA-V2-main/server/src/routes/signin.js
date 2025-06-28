import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// Mock database (replace with actual database)
const users = [
  {
    userId: "user1",
    passwordHash: bcrypt.hashSync("password123", 10),
    role: "investigator",
  },
  {
    userId: "admin1",
    passwordHash: bcrypt.hashSync("adminPass", 10),
    role: "administrator",
  },
  {
    userId: "lab1",
    passwordHash: bcrypt.hashSync("labPass", 10),
    role: "laboratories",
  },
  {userId: "analyst1",
    passwordHash: bcrypt.hashSync("analyst123", 10),
    role: "analyst",}
];

const JWT_SECRET = "hero12345"; // Replace with a secure key

// Sign-in Route
router.post("/signin", async (req, res) => {
  const { userId, password, role } = req.body;

  // Validate request body
  if (!userId || !password || !role) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Find the user in the database
  const user = users.find((u) => u.userId === userId && u.role === role);
  if (!user) {
    return res.status(404).json({ message: "User not found or role mismatch." });
  }

  // Check password
  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials." });
  }

  // Generate JWT token
  const token = jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: "1h" });

  // Send user roles and token
  return res.status(200).json({
    message: "Sign in successful.",
    token,
    roles: [user.role],
  });
});



// // Protected Route Example
// router.get("/api/protected", (req, res) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) return res.status(401).json({ message: "Token required." });

//   const token = authHeader.split(" ")[1];
//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     res.status(200).json({ message: "Access granted.", user: decoded });
//   } catch (err) {
//     res.status(401).json({ message: "Invalid token." });
//   }
// });

export default router;
