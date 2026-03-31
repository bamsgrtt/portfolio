import React from "react";
import { 
  DiJava, DiNodejsSmall, DiMongodb, DiGit, DiPython, DiDocker 
} from "react-icons/di";
import { 
  SiTypescript, SiNextdotjs, SiVuedotjs, SiJavascript, SiTailwindcss, SiBootstrap, 
  SiReact, SiFirebase, SiPostman, SiFlutter, SiFigma, SiBlender, SiCplusplus, 
  SiMysql, SiPostgresql, SiLaravel, SiGo, SiDart, SiCanva, SiOpenai, SiPhp 
} from "react-icons/si";
import { FaPalette, FaCode, FaServer, FaTools, FaMobileAlt } from "react-icons/fa";

const Skill = () => {
  // Data Skill dikelompokkan berdasarkan kategori
  const skillData = [
    {
      category: "Design & UI/UX",
      icon: <FaPalette />,
      skills: [
        { name: "Figma", icon: <SiFigma />, color: "text-pink-500" },
        { name: "Canva", icon: <SiCanva />, color: "text-blue-400" },
        { name: "Blender 3D", icon: <SiBlender />, color: "text-orange-500" },
      ],
    },
    {
      category: "Programming & Frameworks",
      icon: <FaCode />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
        { name: "React JS", icon: <SiReact />, color: "text-cyan-400" },
        { name: "Next JS", icon: <SiNextdotjs />, color: "text-white" },
        { name: "Vue JS", icon: <SiVuedotjs />, color: "text-green-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
        { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
      ],
    },
    {
      category: "Backend & Database",
      icon: <FaServer />,
      skills: [
        { name: "Node JS", icon: <DiNodejsSmall />, color: "text-green-600" },
        { name: "PHP", icon: <SiPhp />, color: "text-indigo-400" },
        { name: "Laravel", icon: <SiLaravel />, color: "text-red-500" },
        { name: "Python", icon: <DiPython />, color: "text-blue-500" },
        { name: "Java", icon: <DiJava />, color: "text-red-600" },
        { name: "C++", icon: <SiCplusplus />, color: "text-blue-700" },
        { name: "Go Lang", icon: <SiGo />, color: "text-cyan-500" },
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-300" },
        { name: "MongoDB", icon: <DiMongodb />, color: "text-green-500" },
      ],
    },
    {
      category: "Mobile & AI",
      icon: <FaMobileAlt />,
      skills: [
        { name: "Flutter", icon: <SiFlutter />, color: "text-blue-400" },
        { name: "Dart", icon: <SiDart />, color: "text-blue-500" },
        { name: "OpenAI", icon: <SiOpenai />, color: "text-green-400" },
      ],
    },
    {
      category: "Tools & Others",
      icon: <FaTools />,
      skills: [
        { name: "Git", icon: <DiGit />, color: "text-orange-600" },
        { name: "Docker", icon: <DiDocker />, color: "text-blue-500" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
        { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
      ],
    },
  ];

  return (
    <div className="py-20 px-6 md:px-16 bg-white" id="skills">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
            Learning Path
          </h3>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Skills & Expertise
          </h1>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="space-y-16">
          {skillData.map((group, index) => (
            <div key={index} className="space-y-3">
              {/* Category Label */}
              <div className="flex items-center gap-3 border-b border-gray-100">
                <span className="text-2xl text-blue-600">{group.icon}</span>
                <h2 className="text-2xl font-bold text-gray-800">{group.category}</h2>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 px-5 py-3 bg-gray-900 rounded-full border border-gray-700 transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:border-blue-500 group cursor-default shadow-lg"
                  >
                    <span className={`text-2xl ${skill.color} transition-transform group-hover:rotate-12`}>
                      {skill.icon}
                    </span>
                    <span className="text-white font-medium text-sm md:text-base whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
