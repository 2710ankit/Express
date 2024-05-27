import bcrypt from "bcrypt";

export const generateHash = async (password, saltRound = 10) => {
  return bcrypt.hash(password, saltRound);
};

export const compareHash = (password, hash) => {
  return bcrypt.compare(password, hash);
};
