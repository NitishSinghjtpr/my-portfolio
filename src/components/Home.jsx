import nitish from "/nk.png"
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
// import nitish from ".../"

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#1c252f] text-white flex items-center pt-0"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* <h1 className="text-blue-800 text-4xl -mt-10">Welcome to mt portfoli</h1> */}

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-2">Hi, It's Me</h3>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              I'm <span className="text-cyan-400">Nitish</span>
            </h1>

            <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed mx-auto md:mx-0">
              I'm a MERN Stack Developer and Frontend Developer. I love creating
              modern, responsive and user-friendly websites using React,
              Node.js, Express and MongoDB.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a
                href="https://github.com/NitishSinghjtpr"
                className="border border-cyan-400 text-cyan-400 p-2 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/nitish-kumar-8aab70270/"
                className="border border-cyan-400 text-cyan-400 p-2 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              {/* <a
                href="#"
                className="border border-cyan-400 text-cyan-400 p-2 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition duration-300"
              >
                <FaInstagram size={20} />
              </a> */}

              {/* <a
                href="#"
                className="border border-cyan-400 text-cyan-400 p-2 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition duration-300"
              >
                <FaFacebook size={20} />
              </a> */}
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-80 md:w-96 md:h-[420px] flex items-center justify-center">
              {/* Cyan Background Shape */}
              <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-cyan-400 rounded-[40%] rotate-12"></div>

              {/* Profile Image */}
              <img
                src={nitish}
                alt="Nitish Kumar"
                className="w-full h-full z-10 object-contain"
              />

              {/* Bottom Line */}
              <div className="absolute bottom-0 w-full h-1 bg-cyan-400"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
