const express = require('express');
const router = express.Router();
const upload = require("../middleware/multer");
const recordsController = require("../controllers/recordsController");
const { ensureAuth } = require("../middleware/auth");

router.get("/:id",  recordsController.getRecord);
router.put("/edit/:id",  recordsController.editRecord);
router.post("/createRecord", upload.single("file"), recordsController.createRecord);
router.delete("/deleteRecord/:id", recordsController.deleteRecord);

module.exports = router;