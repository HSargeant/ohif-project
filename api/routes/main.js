const express = require('express')
const router = express.Router()
const examsController = require("../controllers/examsController")
const authController = require("../controllers/authController")
const { ensureAuth, ensureGuest } = require("../middleware/auth")

router.get('/api/user', ensureAuth,authController.getUser)
router.get('/api/profile', ensureAuth,examsController.getProfile)
router.get("/api/exams",  ensureAuth,examsController.getFeed)
router.post("/login", authController.postLogin)
router.get("/logout",ensureAuth, authController.logout)
router.post("/signup", authController.postSignup)

// api test route
router.get('/api', (req,res)=>{
    res.json("Back end is running and can be reached at localhost:8000/api.  Look in the api/routes folder for more endpoints")
})


module.exports = router