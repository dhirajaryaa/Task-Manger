import {Router} from "express";
import { createNewTask, getAllTask,getTask, markTaskCompleted, markTaskFavorite, removeTask, updateTask,updateTaskDueDate } from "../controllers/task.controller.js";

export const taskRouter = Router();

taskRouter.post('/',createNewTask);
taskRouter.get('/',getAllTask);
taskRouter.get('/:taskId',getTask);
taskRouter.put('/',updateTask);
taskRouter.delete('/:taskId',removeTask);
taskRouter.patch('/:taskId/completed',markTaskCompleted);
taskRouter.patch('/:taskId/favorite',markTaskFavorite);
taskRouter.patch('/:taskId/due-date',updateTaskDueDate);