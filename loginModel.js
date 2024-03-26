const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /^[a-zA-Z0-9]{10}$/.test(value), 
            message: 'Username must be in the format 4NMYYBRXXX' 
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /^[^\s@]+@nmamit\.in$/.test(value), 
            message: 'Email must be in @nmamit.in format' 
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 4 
    },
    club: {
        type: [String],
        default: null
    }
});

const Login = mongoose.model('Login', userSchema); 

module.exports = Login;
