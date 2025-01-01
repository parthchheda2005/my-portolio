import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactMe() {
  return (
    <div className="min-h-44 flex flex-col items-center gap-3" id="contactMe">
      <h1 className="text-5xl">contact me</h1>
      <ul className="flex flex-row flex-wrap gap-5">
        <li>
          <button
            onClick={() =>
              window
                .open("https://github.com/parthchheda2005", "_blank")
                ?.focus()
            }
            className="text-white hover:scale-105 transition-all"
          >
            <FaGithubSquare size={90} />
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              window
                .open(
                  "https://www.linkedin.com/in/parth-chheda-2a8805309/",
                  "_blank"
                )
                ?.focus()
            }
            className="text-white hover:scale-105 transition-all"
          >
            <FaLinkedin size={90} />
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              window.open("mailto:parth.h.chheda@gmail.com", "_blank")?.focus()
            }
            className="text-white hover:scale-105 transition-all"
          >
            <MdEmail size={90} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ContactMe;
