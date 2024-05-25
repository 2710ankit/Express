import { User } from "../models/mysql/users.modal.js";
import { catchAsync } from "../utils/catch-async-error.util.js";
import { AppError } from "../utils/error-handler.util.js";

export const login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password)
    throw new AppError("Username or Password not found", 400);

  try {
    const user = await User.findOne({
      where: {
        username,
        password,
      },
    });

    if (!user) throw new AppError("Username or Password not Correct", 400);
    res.send(user);
  } catch (error) {
    throw new AppError(error, 400);
  }
});

export const signUp = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password)
    throw new AppError("Username or Password not found", 400);

  //  TODO :- check for already existing user

  try {
    await User.create({
      username,
      password,
    });
  } catch (error) {
    throw new AppError(error, 400);
  }

  res.send("success");
});
