import axios from "axios";
import { auth } from "../config/firebase.js";
import pool from "../config/db.js";

export const registerUser = async (email, password) => {
  // Create user in Firebase
  const user = await auth.createUser({
    email,
    password,
  });

  // Save user in PostgreSQL
  await pool.query(
    `
    INSERT INTO users (firebase_uid, email)
    VALUES ($1, $2)
    ON CONFLICT (email) DO NOTHING
    `,
    [user.uid, user.email]
  );

  return user;
};

export const loginUser = async (email, password) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );

  return response.data;
};

// Forgot Password
export const sendPasswordReset = async (email) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.FIREBASE_API_KEY}`,
    {
      requestType: "PASSWORD_RESET",
      email: email,
    }
  );

  return response.data;
};
