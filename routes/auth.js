const express = require('express');
const router = express.Router();

// Mock user data
const mockUser = {
    username: 'testuser',
    password: 'testpass' // In a real application, passwords should be hashed
};

// User login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === mockUser.username && password === mockUser.password) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
