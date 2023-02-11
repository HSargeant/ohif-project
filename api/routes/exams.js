const express = require('express');
const router = express.Router();
const upload = require("../middleware/multer");
const examsController = require("../controllers/examsController");
const { ensureAuth } = require("../middleware/auth");

router.get("/:id",  ensureAuth,examsController.getExam); 
router.put("/edit/:id",  ensureAuth,examsController.editExam); 
router.post("/createExam", ensureAuth,upload.single("file"), examsController.createExam);
router.delete("/deleteExam/:id", ensureAuth,examsController.deleteExam);

module.exports = router;