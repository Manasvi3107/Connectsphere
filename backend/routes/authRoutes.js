const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
  updateProfile
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Public Routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected Routes
router.get('/me', protect, getUser);
router.put('/me', protect, updateProfile);

module.exports = router;
