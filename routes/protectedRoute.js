const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const User = require('../models/User');
// Protected route
router.get('/', verifyToken, (req, res) => {
User.findById(req.userId)
  .then(userData => {
    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'Protected route accessed', userData });
  })
  .catch(error => {
    res.status(500).json({ error: 'Internal server error' });
  });
});

module.exports = router;