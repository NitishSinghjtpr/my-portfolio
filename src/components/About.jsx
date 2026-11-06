import Resume from "../images/NKR.pdf"

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#1c252f] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center">

          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            I'm Nitish Kumar
          </h3>

          <h4 className="text-xl text-cyan-400 font-semibold mb-6">
            MERN Stack Developer
          </h4>

          <p className="text-gray-300 text-base md:text-lg leading-8 mb-6 text-justify">
            Hello! I'm Nitish Kumar, a passionate and dedicated
            Web Developer who loves creating modern and interactive
            web applications. I enjoy turning creative ideas into
            real-world digital experiences.
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-8 mb-6 text-justify">
            I have completed my B.Tech in Software Engineering
            and gained practical industry experience through a
            6-month internship at Paarsh Infotech Pvt. Ltd.
            This experience helped me understand real-world
            development practices and improve my problem-solving
            abilities.
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-8 mb-10 text-justify">
            I am always eager to learn new things, explore
            innovative technologies and work on challenging
            projects. My goal is to grow as a professional
            developer and contribute to building useful and
            impactful digital solutions.
          </p>

          {/* Personal Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-10">

            <div className="bg-[#263442] p-5 rounded-xl border border-gray-700">
              <h4 className="text-cyan-400 font-semibold mb-2">
                Experience
              </h4>
              <p className="text-gray-300">
                6 Months Internship
              </p>
            </div>

            <div className="bg-[#263442] p-5 rounded-xl border border-gray-700">
              <h4 className="text-cyan-400 font-semibold mb-2">
                Education
              </h4>
              <p className="text-gray-300">
                B.Tech – Software Engineering
              </p>
            </div>

            <div className="bg-[#263442] p-5 rounded-xl border border-gray-700">
              <h4 className="text-cyan-400 font-semibold mb-2">
                Internship
              </h4>
              <p className="text-gray-300">
                Paarsh Infotech Pvt. Ltd.
              </p>
            </div>

            <div className="bg-[#263442] p-5 rounded-xl border border-gray-700">
              <h4 className="text-cyan-400 font-semibold mb-2">
                Career Goal
              </h4>
              <p className="text-gray-300">
                Full Stack Developer
              </p>
            </div>

          </div>

          {/* Button */}
          <a
            href={Resume}
            download
            className="inline-block bg-cyan-400 text-gray-950 px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transition duration-300"
          >
            Download CV
          </a>

        </div>
      </div>
    </section>
  );
}

export default About;

