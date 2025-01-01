import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactMe() {
  return (
    <div
      className="min-h-44 flex flex-col items-center md:flex-row sm:mr-20 sm:ml-20 justify-evenly mb-7"
      id="contactMe"
    >
      <div className="flex flex-col justify-center items-center w-max gap-3">
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
              <FaGithubSquare size={30} />
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
              <FaLinkedin size={30} />
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                window
                  .open("mailto:parth.h.chheda@gmail.com", "_blank")
                  ?.focus()
              }
              className="text-white hover:scale-105 transition-all"
            >
              <MdEmail size={30} />
            </button>
          </li>
        </ul>
      </div>
      <form className="flex flex-col gap-3 justify-start items-center w-full max-w-xl px-4 text-lg">
        <label className="flex flex-col gap-2 w-full">
          Email
          <input
            name="Email"
            placeholder={"xyz@anemailservice.com"}
            className="w-full text-[#313639] text-sm rounded-lg block p-2.5 resize-none"
          />
        </label>
        <label className="flex flex-col gap-2 w-full">
          Subject
          <input
            name="Subject"
            placeholder={"u know whant a subject is"}
            className="w-full text-[#313639] text-sm rounded-lg block p-2.5 resize-none"
          />
        </label>
        <label className="flex flex-col gap-2 w-full">
          Message
          <textarea
            name="Message"
            placeholder={"write your message here"}
            className="w-full text-[#313639] text-sm rounded-lg block p-2.5 h-24 resize-y align-text-top"
          />
        </label>
        <button className="bg-blue-500 hover:bg-blue-600 text-grey-100 font-bold py-2 px-4 rounded mt-2 w-full">
          send message
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
