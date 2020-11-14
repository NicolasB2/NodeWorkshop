var express = require('express');
var router = express.Router();
var user_controller = require("../controllers/userController")  

router.get("/", user_controller.listAllUsers) 
router.post("/", user_controller.createUser) 
router.get('/', user_controller.readUser);
router.put("/", user_controller.updateUser) 
router.delete("/", user_controller.deleteUser)  

module.exports = router; 