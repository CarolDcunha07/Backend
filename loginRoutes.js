const express = require('express');
const router = express.Router();
const Login = require('../models/loginModel');

const usernameRegex = /^(4NM(20|21)(CS|IS|CC|AI|RI|CV|ME)\d{3})$/;

const emailRegex = /^[^\s@]+@nmamit\.in$/;

router.post('/', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        if (!usernameRegex.test(username)) {
            return res.status(400).json({ message: 'Invalid username format' });
        }

        if (password.length < 4) {
            return res.status(400).json({ message: 'Password must be at least 4 characters long' });
        }

        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format. Email must be in @nmamit.in format' });
        }

        if (!password || !email) {
            return res.status(400).json({ message: 'Password and email are required fields' });
        }

        const newLogin = new Login({
            username,
            password,
            email
        });

        await newLogin.save();

        return res.status(201).json({ message: 'Login data saved successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
