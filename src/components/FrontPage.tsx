import MyFace from "../assets/MyFace.jpg";
import { TypeAnimation } from "react-type-animation";

function FrontPage() {
  return (
    <div className="h-screen flex justify-center items-center flex-col md:flex-row lg:ml-30 lg:mr-30">
      <img
        className="rounded-full w-auto h-72 sm:max-w-xs md:max-w-sm lg:max-w-md object-cover idle-orbit md:mr-10 mt-24 md:mt-0 md:mb-0"
        src={MyFace}
        alt="Parth Chheda"
      />
      <div className="px-5 my-auto text-center md:text-left">
        <h1 className="text-gray-100 text-6xl">
          <div className="lg:min-w-[550px]">
            <TypeAnimation
              sequence={["hi, i am parth!", 1000]}
              wrapper="span"
              speed={50}
              cursor={false}
            />
          </div>
        </h1>

        <p className="my-6 text-2xl text-wrap">
          i am a{" "}
          <TypeAnimation
            sequence={[
              "developer",
              1000,
              "lifelong learner",
              1000,
              "problem solver",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </p>
        <p className="my-6 text-l text-wrap">
          <TypeAnimation
            sequence={["📍 vancouver, bc, canada", 1000]}
            wrapper="span"
            speed={50}
            cursor={false}
          />
        </p>
        <div className="flex flex-row justify-center items-center md:justify-start gap-4 mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-grey-100 font-bold py-2 px-4 rounded">
            resume
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-grey-100 font-bold py-2 px-4 rounded">
            contact me
          </button>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
