import IconCloud from "./ui/icon-cloud";

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
];

function AboutMe() {
  return (
    <div className="h-screen flex flex-col items-center my-28 sm:my-1">
      <h1 className="text-5xl">about</h1>
      <div className="flex lg:flex-row justify-evenly items-start mt-5 flex-col lg:gap-24 gap-12">
        <div className="flex justify-center">
          <IconCloud iconSlugs={slugs} />
        </div>

        <div className="lg:pt-16 max-w-96 flex justify-center w-full">
          <ul className="flex flex-col gap-8 text-lg text-center md:text-left items-center justify-center lg:mx-5">
            <li>
              📚 2nd year computer science student at the University of British
              Columbia
            </li>
            <li>
              👨‍💻 skills: javascript, typescript, python, java, c++, html, css,
              r, node.js, express, react, fastapi, mongodb, tailwindcss, git,
              github
            </li>
            <li>
              💻 interested in software development, and eagar to explore other
              fields as well!
            </li>
            <li>
              interests: soccer (COYB 🔵), fantasy sports ⚽️, puzzles 🧩{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
