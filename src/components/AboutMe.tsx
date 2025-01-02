import { useRef } from "react";
import IconCloud from "./ui/icon-cloud";
import { motion, useInView } from "framer-motion";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "git",
  "github",
  "python",
  "fastapi",
  "mongodb",
  "cplusplus",
  "tailwindcss",
  "openjdk",
  "r",
  "eclipseide",
  "intellijidea",
  "postman",
];

function AboutMe() {
  const aboutMeVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  };
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="w-full flex flex-col items-center justify-center p-4 my-20"
      id="aboutMe"
    >
      <h1 className="text-5xl mb-8">about</h1>

      <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-12 lg:gap-24">
        <div className="flex justify-center">
          <IconCloud iconSlugs={slugs} />
        </div>

        <div className="w-full max-w-96 flex justify-center" ref={ref}>
          <ul className="w-full flex flex-col gap-8 text-lg">
            <motion.li
              className="text-center"
              variants={aboutMeVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.75, delay: 0 * 0.75 }}
            >
              📚 2nd year computer science student at the university of british
              columbia
            </motion.li>
            <motion.li
              className="text-center"
              variants={aboutMeVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.75, delay: 1 * 0.75 }}
            >
              👨‍💻 skills: javascript, typescript, python, java, c++, html, css,
              r, node.js, express, react, fastapi, mongodb, tailwindcss, git,
              github
            </motion.li>
            <motion.li
              className="text-center"
              variants={aboutMeVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.75, delay: 2 * 0.75 }}
            >
              💻 interested in software development, and eagar to explore other
              fields as well!
            </motion.li>
            <motion.li
              className="text-center"
              variants={aboutMeVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.75, delay: 3 * 0.75 }}
            >
              other interests: soccer (COYB 🔵), fantasy sports ⚽️, puzzles 🧩
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
