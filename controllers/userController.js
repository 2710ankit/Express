import { SECRET_KEY } from "../middlewares/token-verification.middleware.js";
import { User } from "../models/mysql/users.modal.js";
import { compareHash, generateHash } from "../utils/bycrypt.util.js";
import { catchAsync } from "../utils/catch-async-error.util.js";
import { AppError } from "../utils/error-handler.util.js";
import jwt from "jsonwebtoken";

export const login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new AppError("Username or Password not found", 400));
  }

  const user = await User.findOne({
    where: { username },
  });

  if (!user || !(await compareHash(password, user.password))) {
    return next(new AppError("Username or Password not Correct", 403));
  }

  const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.setHeader("Authorization", token).status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

export const signUp = catchAsync(async (req, res, next) => {
  let { username, password, roles } = req.body;

  if (!username || !password) {
    return next(new AppError("Username or Password not found", 400));
  }

  const existingUser = await User.findOne({
    where: { username },
  });

  if (existingUser) {
    return next(new AppError("Username already present", 409));
  }

  const hash = await generateHash(password);

  roles = roles ?? ["user"];
  const newUser = await User.create({
    username,
    password: hash,
    role: roles,
  });

  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});
