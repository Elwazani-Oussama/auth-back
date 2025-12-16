import express from "express";
import {
  login,
  signUp,
  resetPassword,
  forgotPassword,
} from "../Controllers/auth.js";

import {
  validations,
  errorValidatorHandler,
} from "../middlewares/Validations.js";

const router = express.Router();

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

export default router;
