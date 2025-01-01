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
    <div
      className="w-full flex flex-col items-center justify-center p-4"
      id="aboutMe"
    >
      <h1 className="text-5xl mb-8">about</h1>

      <div className="w-full flex lg:flex-row flex-col items-center justify-center gap-12 lg:gap-24">
        <div className="flex justify-center">
          <IconCloud iconSlugs={slugs} />
        </div>

        <div className="w-full max-w-96 flex justify-center">
          <ul className="w-full flex flex-col gap-8 text-lg">
            <li className="text-center">
              📚 2nd year computer science student at the University of British
              Columbia
            </li>
            <li className="text-center">
              👨‍💻 skills: javascript, typescript, python, java, c++, html, css,
              r, node.js, express, react, fastapi, mongodb, tailwindcss, git,
              github
            </li>
            <li className="text-center">
              💻 interested in software development, and eagar to explore other
              fields as well!
            </li>
            <li className="text-center">
              interests: soccer (COYB 🔵), fantasy sports ⚽️, puzzles 🧩
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
