import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-[8vh] w-full text-gray-100 flex justify-between items-center px-4 md:px-10 fixed top-0 z-10 md:bg-[#313639] bg-[#282b2d]">
      <h1 className="text-2xl font-bold cursor-pointer lg:ml-60">
        parth chheda
      </h1>
      <ul className="hidden md:flex space-x-8 lg:mr-60">
        <li>
          <button className="hover:text-gray-300">about</button>
        </li>
        <li>
          <button className="hover:text-gray-300">projects</button>
        </li>
        <li>
          <button className="hover:text-gray-300">contact me</button>
        </li>
      </ul>

      <div className="md:hidden z-20">
        {menuOpen ? (
          <IoCloseSharp
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <IoMdMenu className="text-3xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      <div
        className={`absolute top-[8vh] left-0 w-full flex flex-col items-center space-y-6 py-10 transition-transform duration-300 bg-[#3e4346] ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button className="hover:text-gray-300" onClick={toggleMenu}>
          about
        </button>
        <button className="hover:text-gray-300" onClick={toggleMenu}>
          projects
        </button>
        <button className="hover:text-gray-300" onClick={toggleMenu}>
          contact me
        </button>
      </div>
    </div>
  );
}

export default NavBar;
