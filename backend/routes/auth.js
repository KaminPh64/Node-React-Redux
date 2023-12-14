// http://localhost:5000/v1/register

const express = require("express");
const router = express.Router();

const { register, login, currentUser } = require("../controllers/auth");
const { auth } = require("../middleware/auth")

router.post("/register", register);
router.post("/login", login);
router.post("/current-user",auth, currentUser);

module.exports = router;
