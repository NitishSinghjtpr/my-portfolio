
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiMysql,
  SiPostman,
  SiVite,
  SiCloudinary,
  SiJsonwebtokens,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
      { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-300" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
      { name: "Redux Toolkit", icon: <SiRedux />, color: "text-purple-400" },
    ],
  },
  {
    title: "Backend Development",
    description: "Building server-side applications and REST APIs.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
      { name: "JWT Authentication", icon: <SiJsonwebtokens />, color: "text-pink-400" },
      { name: "Cloudinary", icon: <SiCloudinary />, color: "text-blue-400" },
    ],
  },
  {
    title: "Database",
    description: "Managing and storing application data.",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
    ],
  },
  {
    title: "Programming Languages",
    description: "Programming fundamentals and problem solving.",
    skills: [
      { name: "Java", icon: <FaJava />, color: "text-red-400" },
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    ],
  },
  {
    title: "Tools & Technologies",
    description: "Tools used for development and collaboration.",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
      { name: "Vite", icon: <SiVite />, color: "text-purple-400" },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skill"
      className="min-h-screen bg-[#1c252f] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Here are the technologies and tools I use to build
            modern, responsive and scalable web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#263442] border border-gray-700 rounded-2xl p-7 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >

              <h3 className="text-xl font-bold text-cyan-400 mb-3">
                {category.title}
              </h3>

              <p className="text-gray-400 text-sm mb-7 leading-6">
                {category.description}
              </p>

              <div className="grid grid-cols-2 gap-4">

                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center justify-center gap-3 bg-[#1c252f] rounded-xl p-5 border border-gray-700 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
                  >
                    <span className={`text-4xl ${skill.color}`}>
                      {skill.icon}
                    </span>

                    <span className="text-sm text-gray-200 font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm md:text-base">
            Always learning, always improving.
            <span className="text-cyan-400 font-semibold">
              {" "}Growing every day as a developer.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;

