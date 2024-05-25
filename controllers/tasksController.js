import { Task } from "../models/mysql/tasks.modal.js";
import { catchAsync } from "../utils/catch-async-error.util.js";
import { AppError } from "../utils/error-handler.util.js";

export const getAllTasks = catchAsync(async (req, res, next) => {
  // TODO :- check user is logged in or not,
  // TODO :- check user is valid or not
  // TODO :- show user specific data,

  const tasks = await Task.findAll();

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
  //  TODO :- check if user is logged in or not
  //  TODO :- add to user specific task
  const newTask = await Task.create(req.body);
  res.send({
    status: 201,
    data: newTask,
  });
});
