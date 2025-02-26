import {Router} from "express";
import { createNewTask } from "../controllers/task.controller.js";

export const taskRouter = Router();

taskRouter.post('/',createNewTask);