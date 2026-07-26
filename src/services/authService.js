import axios from "axios";
import { auth } from "../config/firebase.js";

export const registerUser = async (email, password) => {
  const user = await auth.createUser({
    email,
    password,
  });

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