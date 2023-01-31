const express = require('express')
const router = express.Router()
const recordsController = require("../controllers/examsController")
const authController = require("../controllers/authController")
const { ensureAuth, ensureGuest } = require("../middleware/auth")

router.get('/api/user', ensureAuth,authController.getUser)
router.get('/api/profile', ensureAuth,recordsController.getProfile)
router.get("/api/exams",  ensureAuth,recordsController.getFeed)
router.post("/login", authController.postLogin)
router.get("/logout",ensureAuth, authController.logout)
router.post("/signup", authController.postSignup)

module.exports = router