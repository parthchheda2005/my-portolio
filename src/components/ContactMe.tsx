import { useState } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY!);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending...");

    if (!email || !subject || !message) {
      setStatus("Please fill in all fields");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_email: email,
          subject: subject,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );
      setSubject("");
      setEmail("");
      setMessage("");
      setStatus("successfully sent the message!");
    } catch (error) {
      console.error(error);
      setStatus("failed to send email. please try again.");
    } finally {
      setTimeout(() => setStatus(""), 3000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: (value: string) => void
  ) => {
    setter(e.target.value);
  };

  return (
    <div
      className="min-h-44 flex flex-col items-center md:flex-row sm:mx-20 justify-evenly mb-7"
      id="contactMe"
    >
      <div className="flex flex-col justify-center items-center w-max gap-3">
        <h1 className="text-5xl">contact me</h1>
        <ul className="flex flex-row flex-wrap gap-5">
          <li>
            <button
              onClick={() =>
                window.open("https://github.com/parthchheda2005", "_blank")
              }
              className="text-white hover:scale-105 transition-all"
              aria-label="GitHub Profile"
            >
              <FaGithubSquare size={30} />
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/parth-chheda-2a8805309/",
                  "_blank"
                )
              }
              className="text-white hover:scale-105 transition-all"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={30} />
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                window.open("mailto:parth.h.chheda@gmail.com", "_blank")
              }
              className="text-white hover:scale-105 transition-all"
              aria-label="Email Contact"
            >
              <MdEmail size={30} />
            </button>
          </li>
        </ul>
      </div>
      <form
        className="flex flex-col gap-3 justify-start items-center w-full max-w-xl px-4 text-lg"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col gap-2 w-full">
          email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => handleInputChange(e, setEmail)}
            placeholder="your.email@example.com"
            className="w-full text-gray-800 text-sm rounded-lg block p-2.5"
            required
          />
        </label>
        <label className="flex flex-col gap-2 w-full">
          subject
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => handleInputChange(e, setSubject)}
            placeholder="u know what a subject is"
            className="w-full text-gray-800 text-sm rounded-lg block p-2.5"
            required
          />
        </label>
        <label className="flex flex-col gap-2 w-full">
          message
          <textarea
            name="message"
            value={message}
            onChange={(e) => handleInputChange(e, setMessage)}
            placeholder="write your message here"
            className="w-full text-gray-800 text-sm rounded-lg block p-2.5 h-24 resize-y"
            required
          />
        </label>
        {status && (
          <p
            className={`m-3 font-medium ${
              status.includes("failed") || status.includes("please fill")
                ? "text-red-600"
                : "text-emerald-600"
            }`}
          >
            {status}
          </p>
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 w-full transition-colors"
        >
          send message
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
