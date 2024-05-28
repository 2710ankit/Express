import { DataTypes } from "sequelize";
import { sequelize } from "../../database-connection.js";
import { Task } from "./tasks.modal.js";
export const User = sequelize.define("user", {
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

  role: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
});

User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User, { foreignKey: "userId" });
await sequelize.sync();
