
function Header() {
  return (
    <header className="w-full py-6 px-4 flex items-center justify-between">
      <h1 className="md:text-6xl sm:text-4xl text-2l font-bold capitalize ">
        Hello 👋, <span className="block">Dhiraj Arya</span>
      </h1>
      <button className="bg-green-400 hover:bg-green-500 ease-in-out duration-250 py-3 px-6 font-semibold rounded-2xl text-white">
        ➕ Add Task
      </button>
    </header>
  );
}

export default Header;
