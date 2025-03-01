import { useState } from "react";
import Task from "./Task";

function Dashboard() {
  const [tasks, setTasks] = useState("");

  return (
    <div className="w-full text-lg p-5">
      <h1 className="py-2 pl-3">All Task !</h1>
      {/* task list  */}
      <div className="flex gap-3 flex-col">
        {tasks && tasks.map((task) => <Task task={task} />)}
        {/* <Task /> */}
      </div>
    </div>
  );
}

export default Dashboard;
