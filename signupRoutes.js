const express = require('express');
const router = express.Router();
const User = require('../models/loginModel');

router.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const newUser = new User({
            username,
            password,
            email
        });

        await newUser.save();

        return res.status(201).json({ message: 'Sign-up successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
