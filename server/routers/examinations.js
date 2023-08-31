const express = require("express");
const {
  addExamination,
  getExaminations,
  updateExamination,
  deleteExamination,
} = require("../controllers/examinations");
const checkAuth = require("../middleware/checkAuth");
const validateExamination = require("../validator/examination");
const router = express.Router();
router.get("/", checkAuth, getExaminations);
router.post("/", checkAuth, validateExamination, addExamination);
router.put("/:id", checkAuth, validateExamination, updateExamination);
router.delete("/:id", checkAuth, deleteExamination);

module.exports = router;
