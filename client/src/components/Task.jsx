import { useState } from "react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { MdStarBorder, MdStar } from "react-icons/md";

function Task() {
  const [checked, setChecked] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const task = {
    _id: "67bf232c7ddc02d519121f7a",
    name: "React v19 Learn",
    description: "this is simple react v 19 learn",
    dueDate: "2025-01-01T00:00:00.000Z",
    isCompleted: true,
    isFavorite: true,
    createdAt: "2025-02-26T14:20:28.894Z",
    updatedAt: "2025-02-27T02:08:54.053Z",
    __v: 0,
  };

  return (
    <article className="bg-gray-800 p-3 sm:p-4 flex items-center rounded-xl">
      {/* checkBox  */}
      <div onClick={() => setChecked(!checked)}>
        {checked ? (
          <ImCheckboxUnchecked size={22} />
        ) : (
          <ImCheckboxChecked size={22} className="text-green-400" />
        )}
      </div>
      {/* title  */}
      <div className="mx-2 sm:mx-5 flex-1">
        <h1 className="font-semibold text-md sm:text-lg truncate block">
          {task && task.name }
        </h1>
        <p className="text-xs text-gray-400 truncate block">
          {task && task.description}
        </p>
      </div>
      {/* dueDate and favorite btn  */}
      <div className="flex justify-center items-end flex-col">
        <div onClick={() => setFavorite(!favorite)} className="text-right">
          {favorite ? (
            <MdStar size={25} className="text-yellow-300" />
          ) : (
            <MdStarBorder size={25} className="text-yellow-300" />
          )}
        </div>
        <p className="text-gray-600 text-xs sm:text-sm uppercase">
          {new Date(task && task.createdAt).toLocaleString()}
        </p>
      </div>
    </article>
  );
}

export default Task;
