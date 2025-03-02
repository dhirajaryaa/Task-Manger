import Task from "./Task";
import useTaskStore from "../store/taskStore";
import { useEffect } from "react";

function Dashboard() {
  const {tasks,fetchTask} = useTaskStore();  

  useEffect(()=>{
    fetchTask() //fetch task when browser reload
  },[]);

  return (
    <div className="w-full text-lg p-5">
      <h1 className="py-2 pl-3">All Task !</h1>
      {/* task list  */}
      <div className="flex gap-3 flex-col">
        {tasks && tasks.map((task) => <Task key={task._id} task={task} />)}
        {/* <Task /> */}
      </div>
    </div>
  );
}

export default Dashboard;
