import React from "react";

function AddTask() {
return (
    <div className=" p-6 w-full md:w-2xl sm:w-xl mx-auto mt-4">
        <form
            className="flex gap-5 flex-col"
        >
            {/* title  */}
            <label htmlFor="title" className="text-lg font-semibold ">
                Title
                <input
                    type="text"
                    id="title"
                    placeholder="-> React v19 Learn."
                    className="  w-full text-base font-normal bg-gray-700 mt-2  p-2 rounded-lg"
                />
            </label>
            {/* description  */}
            <label htmlFor="desc" className="text-lg font-semibold ">
                Description
                <textarea
                    type="text"
                    id="desc"
                    placeholder="-> Learn React v19 Latest Features & hooks"
                    className="  w-full h-38 text-base font-normal bg-gray-700 mt-2  p-2 rounded-lg"
                ></textarea>
            </label>
            {/* due date  */}
            <label htmlFor="dueDate" className="text-lg font-semibold ">
                Due Date
                <input
                    type="date"
                    id="dueDate"
                    className="w-full text-base font-normal bg-gray-700 mt-2  p-2 rounded-lg"
                />
            </label>
        {/* custom checkbox for task completed  */}

        <button className="bg-green-400 mt-4 hover:bg-green-500 ease-in-out duration-250 py-3 px-6 font-semibold rounded-2xl text-white">
        ➕ Add Task
      </button>
        </form>
    </div>
);
}

export default AddTask;
