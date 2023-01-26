const express = require('express')
const router = express.Router()
const dashboardController = require("../controllers/dashboardController")
const authController = require("../controllers/authController")
const { ensureAuth, ensureGuest } = require("../middleware/auth")

/* GET home page. */
router.get('/api/user', authController.getUser)
router.get("/api/dashboard", ensureAuth, dashboardController.getRecords)
router.post("/login", authController.postLogin)
router.get("/logout", authController.logout)
router.post("/signup", authController.postSignup)


module.exports = router