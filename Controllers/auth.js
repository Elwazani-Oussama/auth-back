
const bcrypt = require('bcrypt');
const { prisma } = require('../lib/prisma');

exports.signUp = async (req, res) => {
    const { fullName, email, password } = req.body;
    // encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
        data: {
            fullName,
            email,
            password: hashedPassword
        }
    });
    console.log(newUser)
    res.send('Sign up successful');
}

exports.login = (req, res) => {
    const { email, password } = req.body;

    res.send('Login successful');
}

exports.resetPassword = (req, res) => {
    res.send('Reset password successful');
}

exports.forgotPassword = (req, res) => {
    res.send('Forgot password successful');
}