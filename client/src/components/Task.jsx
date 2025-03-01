import { useState } from "react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { MdStarBorder, MdStar } from "react-icons/md";

function Task({ task }) {
  const [checked, setChecked] = useState(task.isCompleted || false);
  const [favorite, setFavorite] = useState(task.isFavorite || false);

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
          {task && task.name}
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
