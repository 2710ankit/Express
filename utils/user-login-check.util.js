import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../middlewares/token-verification.middleware.js";
export const verifyJwtToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};


export const getUserFromJWT = (token) => {
    return jwt.decode(token, SECRET_KEY);
  };
