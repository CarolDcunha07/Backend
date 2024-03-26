const express = require('express');
const connectDB = require('./db/db');
const Login = require('./models/loginModel');
const clubRoutes = require('./routes/clubRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// user registration (signup)
app.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const existingUser = await Login.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this username or email already exists' });
        }

        const newUser = new Login({ username, password, email });
        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

//user login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await Login.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Incorrect password' });
        }
        if (!user.roles || user.roles.length === 0) {
            user.roles = ['member'];
            await user.save();
        }

        return res.status(200).json({ message: 'Login successful',
    user: user.username,
    email: user.email
    });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

app.use('/club',clubRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
