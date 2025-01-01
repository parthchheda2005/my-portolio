import "./App.css";
import NavBar from "./components/NavBar";
import FrontPage from "./components/FrontPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="text-gray-100 flex flex-col">
      <NavBar />
      <FrontPage />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
