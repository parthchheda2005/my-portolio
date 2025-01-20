import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

interface Project {
  img: string;
  repo: string;
  live?: string;
  title: string;
  stack: string[];
  desc: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      onDoubleClick={() => window.open(project.repo, "_blank")?.focus()}
      className="bg-[#3e4346] p-2 sm:p-6 sm:h-[600px] h-auto sm:max-w-[400px] max-w-[375px] w-auto mx-auto my-6 sm:m-10 rounded-xl shadow-lg flex flex-col sm:hover:scale-105 transition-transform duration-200 cursor-pointer"
    >
      <div className="w-full h-[200px] mb-4 relative group">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover object-center rounded-md"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex flex-row justify-between">
          <h1 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h1>
          <div className="flex flex-row gap-3">
            <a
              href={project.repo}
              target="_blank"
              className="text-white hover:-translate-y-1 hover:scale-105 transition-all"
            >
              <FaGithub size={28} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                className="text-white hover:-translate-y-1 hover:scale-105 transition-all"
              >
                <GoLinkExternal size={28} />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm sm:text-base text-gray-200 overflow-y-auto mb-4">
          {project.desc}
        </p>

        <ul className="flex flex-wrap gap-2 mt-auto overflow-x-auto pb-2">
          {project.stack.map((curr, index) => (
            <li
              key={curr}
              className={`rounded-full px-3 py-1.5 text-sm whitespace-nowrap
                  ${index % 2 === 0 ? "bg-blue-500" : "bg-teal-500"}
                  hover:opacity-90 transition-opacity`}
            >
              {curr}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
