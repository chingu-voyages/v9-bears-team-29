const express = require("express");
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/user/register', userController.create );

router.post('/user/sign_in', userController.login );

module.exports = router;