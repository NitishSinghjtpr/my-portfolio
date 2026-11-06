
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBriefcase,
  FaCode,
  FaTrophy,
  FaCertificate,
} from "react-icons/fa";

const journeyData = [
  {
    year: "2020",
    title: "Secondary Education",
    subtitle: "10th - BSEB Board",
    description:
      "Successfully completed my secondary education with 77.6% marks from the Bihar School Examination Board.",
    icon: <FaGraduationCap />,
    category: "Education",
  },
  {
    year: "2022",
    title: "Higher Secondary Education",
    subtitle: "12th - BSEB Board",
    description:
      "Completed my higher secondary education with 75% marks and prepared for my engineering journey.",
    icon: <FaGraduationCap />,
    category: "Education",
  },
  {
    year: "2022 - 2026",
    title: "Bachelor of Technology",
    subtitle: "Gandhi Institute for Education and Technology",
    description:
      "Pursued B.Tech in Computer Science and Engineering under Biju Patnaik University of Technology (BPUT), Rourkela.",
    icon: <FaGraduationCap />,
    category: "Education",
  },
  {
    year: "2025",
    title: "Started My Development Journey",
    subtitle: "Full Stack Web Development",
    description:
      "Started learning modern web development technologies including HTML, CSS, JavaScript, React.js, Node.js, Express.js and MongoDB. Also explored Core Java, Git and GitHub.",
    icon: <FaLaptopCode />,
    category: "Learning",
  },
  {
    year: "2025 - 2026",
    title: "Practical Project Development",
    subtitle: "MERN Stack Projects",
    description:
      "Worked on real-world projects like Local Service Hub, Learning Management System and Student Management System to improve my development and problem-solving skills.",
    icon: <FaCode />,
    category: "Projects",
  },
  {
    year: "May - September 2026",
    title: "Full Stack Developer Intern",
    subtitle: "Paarsh Infotech Pvt. Ltd.",
    description:
      "Completed a six-month internship focused on full-stack development and practical implementation of a Student Management System.",
    icon: <FaBriefcase />,
    category: "Experience",
  },
  {
    year: "2026",
    title: "Coding Achievement",
    subtitle: "100+ LeetCode Problems Solved",
    description:
      "Solved more than 100 coding problems on LeetCode, improving my programming fundamentals, logical thinking and problem-solving abilities.",
    icon: <FaTrophy />,
    category: "Achievement",
  },
  {
    year: "2026",
    title: "Certifications & Graduation",
    subtitle: "B.Tech - Computer Science Engineering",
    description:
      "Completed my B.Tech journey and earned internship and college certificates while continuing to grow as a Full Stack Developer.",
    icon: <FaCertificate />,
    category: "Achievement",
  },
];

function MyJourney() {
  return (
    <section
      id="journey"
      className="bg-[#1c252f] text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Journey</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Every step of my journey has helped me learn,
            grow and become a better developer.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-cyan-400/40 md:-translate-x-1/2"></div>

          {journeyData.map((item, index) => (

            <div
              key={index}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >

              {/* Timeline Icon */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cyan-400 text-gray-950 flex items-center justify-center z-10 shadow-lg shadow-cyan-400/30">
                {item.icon}
              </div>

              {/* Timeline Card */}
              <div
                className={`ml-14 md:ml-0 w-full md:w-[44%] ${
                  index % 2 === 0
                    ? "md:mr-auto"
                    : "md:ml-auto"
                }`}
              >

                <div className="bg-[#263442] border border-gray-700 rounded-2xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 shadow-xl">

                  {/* Year */}
                  <span className="inline-block bg-cyan-400/10 text-cyan-400 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                    {item.year}
                  </span>

                  {/* Category */}
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">
                    {item.category}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <h4 className="text-cyan-400 text-sm font-medium mb-3">
                    {item.subtitle}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-7">
                    {item.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">

          <h3 className="text-2xl md:text-3xl font-bold">
            The Journey <span className="text-cyan-400">Continues...</span>
          </h3>

          <p className="text-gray-400 mt-4">
            Learning never stops. Every day is an opportunity
            to build something better.
          </p>

        </div>

      </div>
    </section>
  );
}

export default MyJourney;

