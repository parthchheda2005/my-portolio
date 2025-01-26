import courseTracker from "../assets/course-tracker.png";
import fplHelper from "../assets/fpl-helper.png";
import heartDiseasePredictor from "../assets/heart-disease-predictor.png";
import movieWebapp from "../assets/movie-webapp.png";
import electivefinderimg from "../assets/electivefinderimg.png";
import BrainJackImg from "../assets/BrainJackImg.png";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  img: string;
  repo: string;
  live?: string;
  title: string;
  stack: string[];
  desc: string;
}

const projects = [
  {
    img: fplHelper,
    repo: "https://github.com/parthchheda2005/fpl-helper",
    live: "https://fpl-helper.onrender.com",
    title: "FPL Helper",
    stack: [
      "JavaScript",
      "React",
      "MongoDB",
      "Node.js",
      "Express",
      "TailwindCSS",
    ],
    desc: "Fantasy Premier League companion website to compare player statisitcs and provide recommendations on future transfers. Data collected via web scraping the official FPL page and FBREF, and updated biweekly.",
  },
  {
    img: electivefinderimg,
    repo: "https://github.com/parthchheda2005/elective-finder",
    live: "https://elective-finder.vercel.app/",
    title: "Elective Finder",
    stack: [
      "React",
      "FastAPI",
      "TypeScript",
      "Python",
      "MongoDB",
      "TailwindCSS",
    ],
    desc: "Web application to help students find electives. Can perform CRUD operations on course and make accounts which use JWT Authentication, and connects to Gemini 1.5 Flash to provide recommendations on courses.",
  },
  {
    img: BrainJackImg,
    repo: "https://github.com/parthchheda2005/nwhacks-2025-BrainJack",
    live: "https://nwhacks-2025-brain-jack.vercel.app/",
    title: "BrainJack!",
    stack: ["React", "Node.js", "JavaScript", "MongoDB", "TailwindCSS"],
    desc: "Blackjack with a twist - play, win, and double your winnings by answering trivia questions! Collaborated in a team of 3 to develop a game with education benefits to submit for nwHacks 2025.",
  },
  {
    img: heartDiseasePredictor,
    repo: "https://github.com/parthchheda2005/dsci-100-project/blob/main/heart_disease_report.ipynb",
    title: "Heart Disease Predictor",
    stack: ["R", "tidymodels/tidyverse"],
    desc: "Collaborated in a team of 4 to develop a K-Nearest Neighbor prediction model to predict heart disease, considering variables such as cholesterol levels, age and resting heart rate, achieving a ~70% accuracy.",
  },
  {
    img: movieWebapp,
    repo: "https://github.com/parthchheda2005/movie-webapp-frontend",
    live: "https://movie-database-puce.vercel.app/",
    title: "MyMovieList",
    stack: ["JavaScript", "React", "MongoDB", "Node.js", "Express.js", "CSS"],
    desc: "Connects to the TMDb API to show movies playing in cinemas today. Developed CRUD operations for rating movies, persisted on a NoSQL database.",
  },
  {
    img: courseTracker,
    repo: "https://github.com/parthchheda2005/Course-Tracker",
    stack: ["Java", "Java Swing", "JUnit"],
    title: "Course Tracker",
    desc: "Developed a unit-tested application to plan future courses, using OOP principles and uses JSON to persist data.",
  },
];

function Projects() {
  const projectVariants = {
    initial: { y: 150, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const ref = useRef<HTMLDivElement>(null); // Explicitly type the ref
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex flex-col items-center my-20 h-auto mt-7" id="projects">
      <h1 className="text-5xl">projects</h1>
      <div ref={ref}>
        <ul className="mt-5 flex flex-wrap justify-center items-center">
          {projects.map((el: Project, index) => (
            <motion.li
              variants={projectVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.75, delay: index * 0.75 }}
            >
              <ProjectCard project={el} />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
