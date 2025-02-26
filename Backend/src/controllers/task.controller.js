import { AsyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Task } from "../models/task.model.js";

const createNewTask = AsyncHandler(async (req, res) => {
  const { name, description, dueDate, isCompleted, isFavorite } = req.body;

  const missedField = ["name", "description"].find((field) => !req.body[field]);

  if (missedField) {
    throw new ApiError(400, `${missedField} is Required!`);
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

const getAllTask = AsyncHandler(async (req,res)=>{

  const tasks = await Task.find();  

  return res
    .status(200)
    .json(new ApiResponse(200, "All Tasks Fetched!", tasks));
});

export { createNewTask,getAllTask };
