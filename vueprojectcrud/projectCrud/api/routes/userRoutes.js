var express = require('express');
var router = express.Router();
var user_controller = require("../controllers/userController")  

router.get("/", user_controller.listAllUsers) 
router.post("/", user_controller.createUser)  

module.exports = router; 