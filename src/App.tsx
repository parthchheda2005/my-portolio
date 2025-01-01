import "./App.css";
import NavBar from "./components/NavBar";
import FrontPage from "./components/FrontPage";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="text-gray-100">
      <NavBar />
      <FrontPage />
      <AboutMe />
    </div>
  );
}

export default App;
