const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

router.post("/signup", registerUser);
router.post("/login", loginUser);

module.exports = router;

/* {
  "username": "yousef",
  "email": "yousef@example.com",
  "password": "password123",
  "confirmPassword": "password123",
  "role": "User"
} */
//http://localhost:5000/api/auth/