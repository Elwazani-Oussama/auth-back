import bcrypt from 'bcrypt';
import { prisma } from '../lib/prisma.js';

export const signUp = async (req, res) => {
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

export const login = (req, res) => {
    const { email, password } = req.body;

    res.send('Login successful');
}

export const resetPassword = (req, res) => {
    res.send('Reset password successful');
}

export const forgotPassword = (req, res) => {
    res.send('Forgot password successful');
}