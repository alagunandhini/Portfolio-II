import React from "react";

const Skills = () => {
  const skillList = [
    { src: "html.png", name: "HTML" },
    { src: "css.png", name: "CSS" },
    { src: "js.png", name: "JavaScript" },
    { src: "react.png", name: "React" },
    { src: "tailwind.png", name: "Tailwind" },
    { src: "mongo.png", name: "MongoDB" },
    { src: "express.png", name: "Express" },
    { src: "node.png", name: "Node JS" },
    { src: "boot.png", name: "Bootstrap" },
    { src: "postsql.png", name: "PostgreSQL" },
    { src: "java.png", name: "Java" },
    { src: "c.png", name: "C" },
    { src: "git.png", name: "Git" },
    { src: "github.png", name: "GitHub" },
    { src: "post.png", name: "Postman" },
    { src: "vs.png", name: "VS Code" },
  ];

  return (
    <section id="skills" className="relative min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 overflow-hidden p-0">
      
      {/* Background Soft Blurs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-sky-200 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-200 rounded-full blur-[140px]"></div>

          <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold text-slate-800">
          Technical <span className="text-sky-500">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-sky-500 mx-auto mt-4 rounded-full" />
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 px-6">
        {skillList.map((skill, index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * 80}ms` }}
            className="
              group flex flex-col items-center justify-center
              h-28 w-28 md:h-32 md:w-32
              rounded-3xl
              bg-white
              border border-slate-200
              shadow-md
              transition-all duration-500
              hover:-translate-y-2 hover:shadow-xl
              hover:border-sky-400
              animate-fade-in-up
            "
          >
            {/* Icon */}
            <img
              src={skill.src}
              alt={skill.name}
              className="w-12 h-12 mb-3 object-contain group-hover:scale-110 transition-transform duration-500"
            />

            {/* Name */}
            <span className="text-[11px] font-semibold tracking-widest uppercase text-slate-600 group-hover:text-sky-600 transition-colors">
              {skill.name}
            </span>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-2 ring-sky-300/40 transition-all"></div>
          </div>
        ))}
      </div>

      {/* Animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Skills;
