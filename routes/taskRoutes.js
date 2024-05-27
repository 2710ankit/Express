import express from "express";
import { createTask, getAllTasks } from "../controllers/tasksController.js";
import { verifyToken } from "../middlewares/token-verification.middleware.js";

const taskRouter = express.Router();

taskRouter.route("/").get(getAllTasks).post(createTask);

export default taskRouter;
