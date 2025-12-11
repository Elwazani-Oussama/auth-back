const { check, validationResult } = require('express-validator');
const { resetPassword } = require('../Controllers/auth');

const validations = {
    login: [
        check('email')
        .isEmail()
        .withMessage('Invalid email'),
        check('password')
        .isLength({min: 6})
        .withMessage('Password must be at least 6 characters long'),
    ],
    signUp: [
        check('fullName')
        .isLength({min: 3})
        .withMessage("Full name must be at least 3 characters long"),
        check('email')
        .isEmail()
        .withMessage('Invalid email'),
        check('password')
        .isLength({min: 6})
        .withMessage('Password must be at least 6 characters long'),
        check('confirmPassword')
        .custom((value, { req }) => value === req.body.password)
        .withMessage('Passwords do not match'),
    ],
    resetPassword: [
        check('password')
        .isLength({min: 6})
        .withMessage('Password must be at least 6 characters long'),
        check('confirmPassword')
        .custom((value, { req }) => value === req.body.password)
        .withMessage('Passwords do not match'),
    ],
    forgotPassword: [
        check('email')
        .isEmail()
        .withMessage('Invalid email'),
    ],

}

// Middleware to handle validation errors
const errorValidatorHandler = (req, res, next) => {
    const errors = validationResult(req); // Corrected to use validationResult
    if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array()[0].msg });
    }
    next(); // Proceed to the next middleware or route handler if no errors
};

module.exports = {
    validations,
    errorValidatorHandler,
};