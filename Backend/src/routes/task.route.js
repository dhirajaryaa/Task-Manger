import {Router} from "express";
import { createNewTask, getAllTask } from "../controllers/task.controller.js";

export const taskRouter = Router();

taskRouter.post('/',createNewTask);
taskRouter.get('/',getAllTask);