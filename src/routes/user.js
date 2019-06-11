const express = require("express");
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/user/register', userController.create );

router.post('/user/sign_in', userController.login );

router.post('/user/:id/save_profile', userController.addProfile );

router.get('/user/:id/get_profile', userController.fetchProfile );

module.exports = router;