import { auth } from "../config/firebase.js";

export const registerUser = async (email, password) => {
  const user = await auth.createUser({
    email,
    password,
  });

  return user;
};

export const loginUser = async (uid) => {
  const token = await auth.createCustomToken(uid);
  return token;
};
