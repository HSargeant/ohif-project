const express = require('express')
const router = express.Router()
const examsController = require("../controllers/examsController")
const authController = require("../controllers/authController")
const { ensureAuth, ensureGuest } = require("../middleware/auth")
const passport = require('passport')

//  removing ensureAuth (protected endpoints) until I link auth to front end

router.get('/api/user',authController.getUser)
router.get('/api/profile',ensureAuth,examsController.getProfile)
router.get("/api/exams",ensureAuth,examsController.getFeed)
router.post("/login",authController.postLogin)
router.get("/logout",ensureAuth, authController.logout)
router.post("/signup", authController.postSignup)
// google auth
router.get('/auth/google',passport.authenticate('google',{scope: ['profile','email']}))
router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:process.env.DEVELOPMENT||"/"}),(req, res)=>{
    console.log("redir")
    res.redirect(process.env.DEVELOPMENT+'/exams')
})


// api test route
router.get('/api', (req,res)=>{
    res.json("Back end is running and can be reached at localhost:8000/api.  Look in the api/routes folder for more endpoints")
})


module.exports = router