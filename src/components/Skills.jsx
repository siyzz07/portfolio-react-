import { useTheme } from "../ContextApi/ThemeProvider";
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiMysql, SiRedux, SiPostman, SiVite,SiSocketdotio  } from "react-icons/si";
import { FaLock } from "react-icons/fa";


function Skills() {
  const { isDark } = useTheme();

  const skills = [
    { name: "Express.js", icon: <FaNodeJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Html", icon: <FaHtml5 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Socket.IO", icon: <SiSocketdotio /> },
    { name: "Material-UI", icon: <FaReact /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "OAuth", icon: <FaLock /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Redux Toolkit", icon: <SiRedux /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Vite", icon: <SiVite /> },
];

  return (
    <section
  id="skills"
  className={`py-20  "bg-gray-900 text-gray-200 border-y-2 border-white" `}
>
  <div className="container mx-auto px-4">
    <h2 className={`text-4xl font-bold text-center  "text-white" mb-8`}>
      Skills
    </h2>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
            isDark ? "bg-white text-black" : "bg-gray-200 text-gray-800"
          }`}
        >
          {skill.icon && <span className="text-lg">{skill.icon}</span>}
          {skill.name}
        </div>
      ))}
    </div>
  </div>
</section>
  );
}

export default Skills;
