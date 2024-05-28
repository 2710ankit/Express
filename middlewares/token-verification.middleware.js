import jwt from "jsonwebtoken";
import { AppError } from "../utils/error-handler.util.js";

export const SECRET_KEY = "lsfjnosns@#$%^&hjbad";

export const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return next(new AppError("Auth Token NOT found", 403));
  const isTokenverified = jwt.verify(token, SECRET_KEY);
  if (!isTokenverified) return next(new AppError("Not Permitted", 403));

  next();
};
