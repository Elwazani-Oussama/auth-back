const bcrypt = require('bcrypt');

exports.login = (req, res) => {
    const { email, password } = req.body;

    res.send('Login successful');
}

exports.signUp = async (req, res) => {
    const { fullName, email, password } = req.body;
    // encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    console.log(hashedPassword);
    res.send('Sign up successful');
}

exports.resetPassword = (req, res) => {
    res.send('Reset password successful');
}

exports.forgotPassword = (req, res) => {
    res.send('Forgot password successful');
}