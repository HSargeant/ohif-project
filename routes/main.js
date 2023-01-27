const express = require('express')
const router = express.Router()
const recordsController = require("../controllers/recordsController")
const authController = require("../controllers/authController")
const { ensureAuth, ensureGuest } = require("../middleware/auth")

/* GET home page. */
router.get('/api/user', authController.getUser)
router.get('/api/profile', recordsController.getProfile)
router.get("/api/feed",  recordsController.getFeed)
router.post("/login", authController.postLogin)
router.get("/logout", authController.logout)
router.post("/signup", authController.postSignup)

module.exports = router