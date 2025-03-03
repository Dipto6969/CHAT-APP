import express from "express";
import passport from "passport";
import { login, logout, signup, googleAuthCallback } from "../controllers/auth.controller.js";

const router = express.Router();

// Normal Auth Routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// Google OAuth Routes
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  googleAuthCallback
);

export default router;
