import { useRef } from "react";
import IconCloud from "./ui/icon-cloud";
import { motion, useInView } from "framer-motion";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css",
  "nodedotjs",
  "express",
  "git",
  "github",
  "python",
  "fastapi",
  "mongodb",
  "tailwindcss",
  "openjdk",
  "googlecloud",
  "spring",
  "springboot",
  "nextdotjs",
  "intellijidea",
  "postman",
  "postgresql",
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

      <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-12 lg:gap-24 sm:text-base text-sm">
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
              📚 3rd year computer science student at the university of british
              columbia
            </motion.li>
            <motion.li
              className="text-center"
              variants={aboutMeVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.75, delay: 1 * 0.75 }}
            >
              👨‍💻 skills: javascript, typescript, python, java, html, css, sql,
              node.js, express, react, fastapi, mongodb, postgresql,
              tailwindcss, git, github, google cloud, spring boot, microsoft
              azure
            </motion.li>
            <motion.li
              className="text-center"
              variants={aboutMeVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.75, delay: 2 * 0.75 }}
            >
              💻 currently learning: azure
            </motion.li>
            <motion.li
              className="text-center"
              variants={aboutMeVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.75, delay: 3 * 0.75 }}
            >
              other interests: soccer (COYB 🔵), fantasy sports ⚽️, comic books
              (currently reading grant morrison's new x-men) 📖
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
