import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const projectsData = {
  main: [
      {
      title: "Hair Products Website",
      description: "A responsive hair care products website with  clean UI design and add-to-cart functionality ",
      tech: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/alagunandhini/HairCare",
      live: "https://haircare-alna.netlify.app",
      image: "hair.png",
    },
    {
      title: "Pinkyy Ai - Mock Interview ",
      description:
        "A voice-based AI platform to practice resume-specific mock interviews with instant feedback.",
      tech: ["React", "Tailwind", "Express", "MongoDB"],
      github: "https://github.com/alagunandhini/Ai_ResumeReview",
      live: "#",
      image: "Resume1.png",
    },
  
    
    {
      title: "Hindi Learning platform",
      description:
        "Fully responsive e-commerce website with cart and product filtering.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/alagunandhini/EasyLearn",
      live: "https://easylearn-alna.netlify.app/",
      image: "hindi.png",
    },
  ],

  mini: [
    {
      title: "Weather App",
      description: "Real-time weather application using public APIs.",
      tech: ["React","CSS", "API"],
      github: "https://github.com/alagunandhini/WeatherApi",
      live: "https://weatherapp-alna.netlify.app/",
      image: "weather.png",
    },

      {
      title: "User Management (CRUD)",
      description: "A web app to add, view, edit, and delete users easily.",
      tech: ["React", "Tailwind CSS", "Express Js","Postgre Sql"],
      github: "https://github.com/alagunandhini/UserManagement",
      live: "https://user-management1-one.vercel.app/",
      image: "user.png",
    },
     {
      title: "InnoVerse - Modern Ui",
      description: " A modern web interface to explore human innovation. ",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/alagunandhini/InnoVerse",
      live: "https://innoverse-alna.netlify.app/",
      image: "inno.png",
    },

     {
      title: "Photo Gallery",
      description: "A clean and interactive  photo gallery to showcase images",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/alagunandhini/GalleryReact",
      live: "#",
      image: "gal.png",
    },
    {
      title: "Calculator",
      description: "Simple calculator with clean and minimal UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
      image: "calc.png",
    },
    
     {
      title: "Valentines - Drag & Drop",
      description: "Drag & Drop Heart Love Quote Generator for fun ",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/alagunandhini/valentine-s-special",
      live: "#",
      image: "valen.png",
    },
      {
      title: "Todo List",
      description: "A simple web app to add, edit, and delete tasks. ",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
      image: "todo.png",
    },

     {
      title: "Login & Signup",
      description: "A simple web to create accounts and sign in securely. ",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/alagunandhini/login-page",
      live: "#",
      image: "login.png",
    },
      

    


  ],

  team: [
    {
      title: "CVortex - Resume Tools",
      description: " 𝗖𝗩𝗼𝗿𝘁𝗲𝘅 – an AI-powered Resume Analyzer & Resume Builder! ",
      tech: ["React", "Tailwind CSS", "Express js", "MongoDB","llama AI"],
      github: "https://github.com/Madhesh-GitHub/CVortex",
      live: "https://thecvortex.vercel.app/",
      image: "Team.png",
    },
  ],
};

export default function Projects() {
  const [active, setActive] = useState("main");

  return (
    <section id="projects" className="relative bg-slate-50  py-4 px-6 min-h-screen">
       <div className="pointer-events-none absolute top-20 left-20 w-72 h-72 bg-sky-200/60 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-20 right-20 w-72 h-72 bg-blue-200/60 rounded-full blur-[140px]" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
           <h2 className="text-4xl md:text-4xl font-extrabold text-slate-800">
             My Projects
          </h2>
           <div className="w-20 h-1 bg-sky-500 mx-auto mt-4 rounded-full" />
          {/* <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            A collection of projects showcasing my skills in frontend, backend,
            and AI-powered applications.
          </p> */}
        </div>
        

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {[
            { key: "main", label: "Main Projects" },
            { key: "mini", label: "Mini Projects" },
            { key: "team", label: "Team Projects" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition cursor-pointer
                ${
                  active === item.key
                    ? "bg-sky-500 text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-100"
                }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData[active].map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
