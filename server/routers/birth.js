const express = require("express");
const {
  addBirth,
  getBirths,
  updateBirth,
  deleteBirth,
} = require("../controllers/births");
const checkAuth = require("../middleware/checkAuth");
const validateBirth = require("../validator/birth");
const router = express.Router();

router.get("/", checkAuth, getBirths);
router.post("/", checkAuth, validateBirth, addBirth);
router.put("/:id", checkAuth, validateBirth, updateBirth);
router.delete("/:id", checkAuth, deleteBirth);

module.exports = router;
