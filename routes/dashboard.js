const express = require('express');
const router = express.Router();
const upload = require("../middleware/multer");
const dashboardController = require("../controllers/dashboardController");
const { ensureAuth } = require("../middleware/auth");

router.get("/:id", ensureAuth, dashboardController.getRecord);
router.post("/createRecord", upload.single("file"), dashboardController.createRecord);
router.delete("/deleteRecord/:id", dashboardController.deleteRecord);


module.exports = router;
