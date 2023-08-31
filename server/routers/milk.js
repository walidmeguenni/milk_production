const express = require("express");
const {
  addMilk,
  getMilks,
  updateMilk,
  deleteMilk,
  graphMilk,
} = require("../controllers/milk");
const checkAuth = require("../middleware/checkAuth");
const validateMilk = require("../validator/milk");
const router = express.Router();

router.get("/", checkAuth, getMilks);
router.post("/", checkAuth, validateMilk, addMilk);
router.put("/:id", checkAuth, validateMilk, updateMilk);
router.delete("/:id", checkAuth, deleteMilk);
router.get("/graph", checkAuth, graphMilk);

module.exports = router;
