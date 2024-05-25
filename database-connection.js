import mysql from "mysql2";

import mongoose from "mongoose";
import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize("learning_tasks", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});
export const connectDB = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("MYSQL connection successfull");
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
    });

  mongoose
    .connect("mongodb://localhost:27017/learning-tasks", {})
    .then(() => console.log("MONGO connection successful!"));
};
