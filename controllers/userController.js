import { AppError } from "../utils/error-handler.util.js";

let loginCred = {
  username: "ankit",
  password: "asdasdasd",
};
export const login = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password)
    throw new AppError("Username or Password not found", 400);

  if (username !== loginCred.username || password !== loginCred.password)
    throw new AppError("Username or Password not Correct", 400);

  res.send("success");
};

export const signUp = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password)
    throw new AppError("Username or Password not found", 400);

  //  TODO :- check for already existing user

  loginCred = { ...req.body };

  res.send("success");
};
