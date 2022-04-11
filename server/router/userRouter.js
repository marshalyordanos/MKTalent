const express = require('express');
const { signup, login } = require('../controller/authController');
const { getAllUser, getUser } = require('../controller/userController');

const router  = express.Router();

// login and signup routes
router.route('/signup').post(signup)
router.route('/login').post(login)


router.route('/').get(getAllUser)
router.route('/:id').get(getUser)





module.exports = router