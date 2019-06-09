const express = require("express");
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/register', userController.create );

router.get('/sign_in', userController.signIn );

module.exports = router;