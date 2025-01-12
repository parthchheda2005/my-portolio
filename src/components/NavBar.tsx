import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { motion, useSpring, useScroll } from "motion/react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-[6vh] w-full text-gray-100 flex justify-between items-center px-4 md:px-10 fixed top-0 md:bg-[#313639] bg-[#282b2d] z-20">
      <h1
        className="text-2xl font-bold cursor-pointer lg:ml-60 z-20"
        onClick={() => {
          const element = document.getElementById("frontPage");
          element?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        parth chheda
      </h1>
      <ul className="hidden md:flex space-x-8 lg:mr-60">
        <li>
          <button
            className="hover:text-gray-300"
            onClick={() => {
              const element = document.getElementById("aboutMe");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            about
          </button>
        </li>
        <li>
          <button
            className="hover:text-gray-300"
            onClick={() => {
              const element = document.getElementById("projects");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            projects
          </button>
        </li>
        <li>
          <button
            className="hover:text-gray-300"
            onClick={() => {
              const element = document.getElementById("contactMe");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            contact me
          </button>
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
        className={`absolute top-[6vh] left-0 w-full flex flex-col items-center space-y-6 py-10 transition-transform duration-300 bg-[#3e4346] ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-10`}
      >
        <button
          className="hover:text-gray-300"
          onClick={() => {
            const element = document.getElementById("aboutMe");
            element?.scrollIntoView({
              behavior: "smooth",
            });
            toggleMenu();
          }}
        >
          about
        </button>
        <button
          className="hover:text-gray-300"
          onClick={() => {
            const element = document.getElementById("projects");
            element?.scrollIntoView({
              behavior: "smooth",
            });
            toggleMenu();
          }}
        >
          projects
        </button>
        <button
          className="hover:text-gray-300"
          onClick={() => {
            const element = document.getElementById("contactMe");
            element?.scrollIntoView({
              behavior: "smooth",
            });
            toggleMenu();
          }}
        >
          contact me
        </button>
      </div>
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: "6vh",
          left: 0,
          right: 0,
          originX: 0,
          height: "2px",
          backgroundColor: "#f7f8fc",
        }}
      ></motion.div>
    </div>
  );
}

export default NavBar;
