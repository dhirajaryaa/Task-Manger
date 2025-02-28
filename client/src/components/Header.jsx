import { Link, useLocation } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";


function Header() {
  const { pathname } = useLocation();

  return (
    <header className="w-full py-6 px-4 flex items-center justify-between">
      <h1 className="md:text-6xl sm:text-4xl text-2l font-bold capitalize ">
        Hello 👋, <span className="block">Dhiraj Arya</span>
      </h1>
      {pathname != "/" ? (
        <Link
          role="button"
          to={"/"}
          className="bg-green-400 hover:bg-green-500 ease-in-out duration-250 py-2 px-3 font-semibold rounded-2xl text-white sm:py-3 sm:px-6 flex items-center"
        >
          <MdArrowBackIos size={22} />
          Back
        </Link>
      ) : (
        <Link
          to={"/create"}
          role="button"
          className="bg-green-400 hover:bg-green-500 ease-in-out duration-250 py-2 px-3 font-semibold rounded-2xl text-white sm:py-3 sm:px-6 gap-2 flex items-center"
        >
<FaPlus size={22}/>
           Add Task
        </Link>
      )}
    </header>
  );
}

export default Header;
