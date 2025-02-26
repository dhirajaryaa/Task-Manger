import { AsyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Task } from "../models/task.model.js";

const createNewTask = AsyncHandler(async (req, res) => {
  const { name, description, dueDate, isCompleted, isFavorite } = req.body;

  if (name === "" || name === null) {
    throw new ApiError(400, "Task Name Field is Required!", {});
  }

  const newTask = await Task.create({
    name,
    description,
    dueDate: dueDate || "",
    isCompleted: isCompleted || false,
    isFavorite: isFavorite || false,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, "Successfully created task", newTask));
});

const getAllTask = AsyncHandler(async (req, res) => {
  const tasks = await Task.find();

  return res
    .status(200)
    .json(new ApiResponse(200, "All Tasks Fetched!", tasks));
});

const getTask = AsyncHandler(async (req, res) => {
  const { taskId } = req.params;

  if (!taskId) {
    throw new ApiError(400, "Task Id missing!", {});
  }

  const task = await Task.findById(taskId);

  return res.status(200).json(new ApiResponse(200, "Task Fetched!", task));
});

const updateTask = AsyncHandler(async (req, res) => {
  const { taskId, name, description, dueDate, isCompleted, isFavorite } =
    req.body;
  if (!taskId) {
    throw new ApiError(400, "Task Id missing!", {});
  }

  const taskIdVerified = await Task.findById(taskId);
  if (!taskIdVerified) {
    throw new ApiError(403, "Task Id is Invalid!", {});
  }

  const updatedTask = await Task.findByIdAndUpdate(taskId, {
    name: name || taskIdVerified.name,
    description: description || taskIdVerified.description,
    dueDate: dueDate || taskIdVerified.dueDate,
    isCompleted: isCompleted || taskIdVerified.isCompleted,
    isFavorite: isFavorite || taskIdVerified.isFavorite,
  });

  return res
  .status(200)
  .json(new ApiResponse(200, "Task Updated", updateTask));
});

const removeTask = AsyncHandler(async (req, res) => {
  const { taskId } = req.params;

  if (!taskId) {
    throw new ApiError(400, "Task Id missing!", {});
  }

  const task = await Task.findByIdAndDelete(taskId);

  return res.status(200).json(new ApiResponse(200, "Task Removed Successfully", task));
});

export { createNewTask, getAllTask, getTask ,updateTask,removeTask};
