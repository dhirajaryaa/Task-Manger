import { ApiHandler } from "../utils/ApiHandler.js";

export const fetchTasks = async () => {
  const res = await ApiHandler("/tasks", "get");
  return res;
};
