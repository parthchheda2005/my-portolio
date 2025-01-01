import "./App.css";
import NavBar from "./components/NavBar";
import FrontPage from "./components/FrontPage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="text-gray-100 flex flex-col">
      <NavBar />
      <FrontPage />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
