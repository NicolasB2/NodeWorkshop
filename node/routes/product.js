var express = require('express');
var router = express.Router();
var product_controller = require("../controllers/product")

router.get("/", product_controller.index)
router.post("/", product_controller.create)

module.exports = router; 