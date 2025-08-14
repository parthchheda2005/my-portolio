import "./App.css";
import NavBar from "./components/NavBar";
import FrontPage from "./components/FrontPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";

function App() {
  return (
    <div className={` flex flex-col text-[#E6E6E6] bg-[#313639]`}>
      <NavBar />
      <div className="z-0">
        <FrontPage />
        <AboutMe />
        <Experience />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
