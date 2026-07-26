import * as authService from "../services/authService.js";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await authService.registerUser(email, password);

    res.status(201).json({
      message: "User registered successfully",
      uid: user.uid,
      email: user.email,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { uid } = req.body;

    const token = await authService.loginUser(uid);

    res.json({
      token,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
