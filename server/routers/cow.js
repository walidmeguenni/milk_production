const express = require("express");
const router = express.Router();
const { addCow, getCows, updateCow, deleteCow } = require("../controllers/cow");
const checkAuth = require("../middleware/checkAuth");
const validateCow = require("../validator/cow");
router.get("/", checkAuth, getCows);
router.post("/", checkAuth, validateCow, addCow);
router.put("/:id", checkAuth, validateCow, updateCow);
router.delete("/:id", checkAuth, deleteCow);

module.exports = router;
