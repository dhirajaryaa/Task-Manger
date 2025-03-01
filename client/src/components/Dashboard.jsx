import React from "react";
import Task from "./Task";

function Dashboard() {
  return (
    <div className="w-full text-lg p-5">
      <h1 className="py-2 pl-3">All Task !</h1>
      <div className="flex gap-3 flex-col">
        <Task />
      </div>
    </div>
  );
}

export default Dashboard;
