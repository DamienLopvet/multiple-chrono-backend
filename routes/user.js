
const express = require("express");

//create router
const router = express.Router();

//import user controller
const userCtrl = require("../controllers/user");


//set up module each route need to pass through
router.post("/signup", userCtrl.signup);
router.post("/login",  userCtrl.login);

module.exports = router;
