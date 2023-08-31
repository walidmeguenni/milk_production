const express = require("express");
const router = express.Router();
const { getInfo } = require("../controllers/info");
const checkAuth = require("../middleware/checkAuth");
router.get("/", checkAuth, getInfo);

module.exports = router;
