import { Task } from "../models/mysql/tasks.modal.js";
import { catchAsync } from "../utils/catch-async-error.util.js";
import { AppError } from "../utils/error-handler.util.js";
import { getUserFromJWT } from "../utils/user-login-check.util.js";

export const getAllTasks = catchAsync(async (req, res, next) => {
  console.log(1)
  const { userId } = getUserFromJWT(req.header("Authorization"));
  console.log(userId)
  const tasks = await Task.findAll({
    where: {
      userId,
    },
  });

  res.send({
    staus: 200,
    data: tasks,
  });
});

export const createTask = catchAsync(async (req, res, next) => {
  const { task, image, status } = req.body;

  if (!task || !image || status === undefined || null)
    throw new AppError("Data is not Valid", 400);

  //  TODO :- check the data type, valid or not
  const { userId } = getUserFromJWT(req.header("Authorization"));
  const newTask = await Task.create({ ...req.body, userId });
  res.send({
    status: 201,
    data: newTask,
  });
});
