import { create } from "zustand";
import { fetchTasks } from "../services/fetchTask.service";

const useTaskStore = create((set) => ({
  tasks: [],
  fetchTask: async () => {
    const task = await fetchTasks();
    set(() => ({ tasks: task.data }));
  },
}));

export default useTaskStore;
