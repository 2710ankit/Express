import { AppError } from "../utils/error-handler.util.js";

let taskList = [
  {
    task: "task1",
    createdAt: new Date(),
    image: "some photo",
  },
];
export const getAllTasks = (req, res, next) => {
  // TODO :- check user is logged in or not,
  // TODO :- check user is valid or not
  // TODO :- show user specific data,

  res.send({
    staus: 200,
    data: taskList,
  });
};

export const createTask = (req, res, next) => {
  const { task, image } = req.body;

  if (!task || !image) throw new AppError("Data is not Valid", 400);

  //  TODO :- check the data type, valid or not
  //  TODO :- check if user is logged in or not
  //  TODO :- add to user specific task

  taskList.push({
    task,
    createdAt: new Date(),
    image,
  });

  res.send({
    status:201,
    data:taskList
  });
};
