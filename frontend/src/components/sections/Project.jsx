import { FaPython,FaHtml5, FaKaggle, FaDocker} from "react-icons/fa";
import MatrixBackground from "../MatrixBackground";
import {
  SiFastapi,
  SiGooglegemini,
  SiHuggingface,
  SiLangchain,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";
import { RevealOnScroll } from "../RevealOnScroll";
import { CustomCursor } from "../CustomCursor";
import { Footer } from "./Footer";
import '../shadow.css'

export const Project = () => {
  const project = {
    id: 1,
    title: "RAG Chatbot About me",
    description:
      "This project is a Retrieval-Augmented Generation (RAG) chatbot designed to answer questions about Amine El Gardoum, a 21-year-old Data Engineering student at ENSA (École Nationale des Sciences Appliquées)AL HOCIMA in Morocco.The chatbot combines information retrieval and large language model (LLM) reasoning to provide accurate, context-aware answers. It retrieves relevant documents, notes, or structured data about Amine (such as his background, education, skills, projects, and career goals) and uses them to generate meaningful responses.",
    skills: [
      "Tailwindcss",
      "Tensorflow",
      "FastAPI",
      "React",
      "Gemini",
      "Huggingface",
      "Langchain",
      "Docker"
    ],
    link: "https://github.com/amineelgardoum-rgb/Rag_amine_chatbot",
    video_link:"https://drive.google.com/file/d/1BKVdfv45SAt5KYmZ9y06OcjBwSc6EqX7/view?usp=drive_link",
    image: "/images/structure.png",
  };

  const skillInfo = {
    fastapi: {
      icon: <SiFastapi />,
      color: "text-white",
      hoverColor: "hover:text-green-600",
      glow: "hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)]",
    },
    docker:{
      icon:<FaDocker />,
      color:"text-white",
      hoverColor:"hover:text-blue-600",
      glow:"hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]"
    },
    tensorflow:{
      icon:<SiTensorflow />,
      color:"text-white",
      hoverColor:"hover:text-orange-600",
      glow:"hover:[filter:drop-shadow(0_0_5px_orange)_drop-shadow(0_0_10px_orange)_drop-shadow(0_0_15px_orange)]"
    },
    huggingface:{
      icon:<SiHuggingface />,
      color:"text-white",
      hoverColor:"hover:text-yellow-500",
      glow:"hover:[filter:drop-shadow(0_0_5px_yellow)_drop-shadow(0_0_10px_yellow)_drop-shadow(0_0_15px_yellow)]"
    },
    react:{
      icon:<SiReact />,
      color:"text-white",
      hoverColor:"hover:text-blue-300",
      glow:"hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]"
    },
    tailwindcss:{
      icon:<SiTailwindcss />,
      color:"text-white",
      hoverColor:"hover:text-blue-400",
      glow:"hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_10px_blue)_drop-shadow(0_0_15px_blue)]"
    },
    gemini:{
      icon:<SiGooglegemini />,
      color:"text-white",
      hoverColor:"hover:text-violet-600",
      glow:"hover:[filter:drop-shadow(0_0_5px_pink)_drop-shadow(0_0_10px_pink)_drop-shadow(0_0_15px_pink)]"
    },
    langchain:{
      icon:<SiLangchain />,
      color:"text-white",
      hoverColor:"hover:text-gray-500",
      glow:"hover:[filter:drop-shadow(0_0_5px_gray)_drop-shadow(0_0_10px_gray)_drop-shadow(0_0_15px_gray)]"
    }
  };

  const getSkillInfo = (skill) =>
    skillInfo[skill.toLowerCase()] || {
      icon: <FaPython />,
      color: "text-gray-400",
      hoverColor: "text-white",
    };

  return (
    <>
      <MatrixBackground />
      <CustomCursor />
      <section
        id="project"
        className="flex min-h-screen items-center justify-center mb-5 bg-black text-green-300 px-6 py-20"
      >
        <div className="max-w-5xl text-center">
          {/* Title */}
          <RevealOnScroll>
            <h1 className="text-5xl md:text-6xl p-6 font-bold mb-10 bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent font-mono ">
              {project.title}
            </h1>
          </RevealOnScroll>

          {/* Image */}
          <RevealOnScroll>
            <img
              src={project.image}
              alt={project.title}
              className="mx-auto rounded-2xl object-fit hover:scale-105 shadow  transition-all duration-300 mb-20"
            />
          </RevealOnScroll>

          {/* Description */}
          <RevealOnScroll>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-20 max-w-3xl mx-auto">
              {project.description}
            </p>
          </RevealOnScroll>

          {/* Skills */}
          <RevealOnScroll>
            <div className="flex flex-wrap justify-center gap-8 mb-30">
              {project.skills.map((skill) => {
                const { icon, color, hoverColor, glow } = getSkillInfo(skill);
                return (
                  <div
                    key={skill}
                    className={`text-5xl cursor-none transition-all duration-500 hover:scale-125 ${color} ${hoverColor} ${glow} hover:-translate-y-1`}
                    title={skill}
                  >
                    {icon}
                  </div>
                );
              })}
            </div>
          </RevealOnScroll>

          {/* Link */}
          <RevealOnScroll>
            <a
              href={project.video_link}
              target="_blank"
              rel="noopener noreferrer"
              className=" group inline-block cursor-none bg-transparent hover:bg-green-500/100 hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)] border border-green-500/100  hover:text-black px-8 py-4 text-lg font-semibold rounded-xl  hover:border-green-200   hover:border hover:border-green-500/100  hover:scale-105 hover:-translate-y-1 m-10 transition-all duration-500 "
            >
              View Tutorial video <span className="group-hover:translate-x-2 inline-block transition-all  duration-500"> → </span>
            </a>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" group inline-block cursor-none hover:bg-transparent hover:text-green-200 px-8 py-4 text-lg font-semibold rounded-xl hover:border hover:border-green-200 hover:[filter:drop-shadow(0_0_5px_green)_drop-shadow(0_0_10px_green)_drop-shadow(0_0_15px_green)] bg-green-500 text-black hover:scale-105 hover:-translate-y-1 m-10 transition-all duration-500 "
            >
              View on GitHub <span className="group-hover:translate-x-2 inline-block transition-all duration-500" > → </span>
            </a>
          </RevealOnScroll>
        </div>
      </section>
      <footer>
        <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
      </footer>
    </>
  );
};
