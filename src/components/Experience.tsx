import { useRef, useState } from "react";
import clauseTechLogo from "../assets/clause_technology_logo.jpeg";
import { motion, useInView } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  img: string;
  desc: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: "Clause Technology",
    role: "Software Engineer Intern",
    duration: "May 2025 - Aug 2025",
    img: clauseTechLogo,
    desc: [
      "Led development of a RESTful API for an admin dashboard using Node.js and MongoDB, enabling weekly analytics updates and support for over 1000+ projected users",
      "Implemented core backend features including two-factor authentication (2FA), role-based access control, and dynamic PDF generation using Redis and Firebase, enhancing system security and overall user experience",
      "Containerized and deployed backend services with Docker on Google Cloud Compute Engine, ensuring reliable access across 3 platforms",
      "Optimized form completion by integrating Large Language Models (LLMs) to auto-fill questions from prompts and reduced API response time by up to 40% by parallelizing LLM calls and database queries",
      "Refactored a React codebase by creating reusable components, reducing file size by 25%, improving maintainability and reducing technical debt, resulting in faster feature development and easier debugging",
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const experienceVariants = {
    initial: { y: 150, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      id="experience"
      className="max-w-full flex flex-col items-center justify-center p-4 my-20"
    >
      <h1 className="text-5xl mb-8">experience</h1>

      <div className="w-full max-w-7xl">
        {experienceData.map((exp, index) => {
          const ref = useRef<HTMLLIElement>(null);
          const contentRef = useRef<HTMLDivElement>(null);
          const isInView = useInView(ref, { once: true });

          const contentHeight =
            openIndex === index && contentRef.current
              ? contentRef.current.scrollHeight
              : 0;

          return (
            <motion.li
              className="list-none"
              variants={experienceVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.5, delay: index * 0.25 }}
              key={index}
              ref={ref}
            >
              <div
                className={`bg-[#3e4346] ${
                  openIndex !== index && "sm:hover:bg-[#4c5356]"
                } sm:hover:shadow-xl transition rounded-xl shadow-2xl p-2 sm:p-3 my-2 sm:my-5`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full p-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{exp.company}</h2>
                      <p className="sm:text-sm text-xs">
                        {exp.role} • {exp.duration}
                      </p>
                    </div>
                  </div>
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: contentHeight,
                  }}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                >
                  <div ref={contentRef}>
                    <ul className="list-disc pl-6 space-y-2">
                      {exp.desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.li>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
