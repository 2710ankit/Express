import { DataTypes } from "sequelize";
import { sequelize } from "../../database-connection.js";
import { Task } from "./tasks.modal.js";
export const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Task, { foreignKey: "userId" });
await sequelize.sync();
