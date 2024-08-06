// auth.js (Updated)

const express = require('express');
const router = express.Router();
const { register, login, forgotPassword } = require('../controllers/authController');

// Enhanced express router syntax for route chaining
router.route('/register').post(register);
router.route('/login').post(login);
router.route('/forgot-password').post(forgotPassword);

// Register route
router.post('/register', register);

// Login route
router.post('/login', login);

// Forgot password route
router.post('/forgot-password', forgotPassword);

module.exports = router


