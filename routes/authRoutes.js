const express = require("express");
const router = express.Router();
const {
  login,
  signUp,
  resetPassword,
  forgotPassword,
} = require("../Controllers/auth");

const {
  validations,
  errorValidatorHandler,
} = require("../middlewares/Validations");

router.post("/sign-in", validations.login, errorValidatorHandler, login);
router.post("/sign-up", validations.signUp, errorValidatorHandler, signUp);
router.post(
  "/reset-password",
  validations.resetPassword,
  errorValidatorHandler,
  resetPassword
);
router.post(
  "/forgot-password",
  validations.forgotPassword,
  errorValidatorHandler,
  forgotPassword
);

module.exports = router;
