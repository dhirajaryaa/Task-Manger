import {Router} from "express";
import { createNewTask, getAllTask,getTask, removeTask, updateTask } from "../controllers/task.controller.js";

export const taskRouter = Router();

taskRouter.post('/',createNewTask);
taskRouter.get('/',getAllTask);
taskRouter.get('/:taskId',getTask);
taskRouter.put('/',updateTask);
taskRouter.delete('/:taskId',removeTask);