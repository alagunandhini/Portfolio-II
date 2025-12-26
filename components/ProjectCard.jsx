export default function ProjectCard({ project }) {
  return (
    <div
      className="group relative rounded-3xl bg-white border border-gray-200
                 shadow-md hover:shadow-lg transition-all duration-300
                 overflow-hidden hover:-translate-y-2"
    >
      {/* Image */}
      <div className="p-4">
        <div className="overflow-hidden rounded-2xl border border-sky-100">
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative px-5 pb-5 text-center space-y-2 transition-opacity duration-500 group-hover:opacity-0">
        <h3 className="text-base font-semibold text-gray-900">{project.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Hover Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg- text-white border border-sky-200/40"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            className="px-5 py-2 text-sm rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="px-5 py-2 text-sm rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}


// export default function ProjectCard({ project }) {
//   return (
//     <div
//       className="group relative rounded-2xl overflow-hidden 
//                  bg-slate-900 shadow-lg 
//                  transition-all duration-500 
//                  hover:-translate-y-2 hover:shadow-2xl"
//     >
//       {/* Project Image */}
//       <img
//         src={project.image}
//         alt={project.title}
//         className="h-56 w-full object-cover 
//                    transition-transform duration-700 
//                    group-hover:scale-110"
//       />

//       {/* Hover Overlay */}
//       <div
//         className="absolute inset-0 
//                    bg-black/70 backdrop-blur-sm
//                    opacity-0 group-hover:opacity-100
//                    transition-all duration-500"
//       />

//       {/* Hover Content */}
//       <div
//         className="absolute inset-0 flex flex-col justify-end 
//                    p-6 translate-y-10 
//                    group-hover:translate-y-0
//                    opacity-0 group-hover:opacity-100
//                    transition-all duration-500 delay-100"
//       >
//         {/* Title */}
//         <h3 className="text-2xl font-bold text-white mb-2">
//           {project.title}
//         </h3>

//         {/* Description */}
//         <p className="text-sm text-gray-300 mb-4 line-clamp-2">
//           {project.description}
//         </p>

//         {/* Tech Stack */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.tech.map((t, i) => (
//             <span
//               key={i}
//               className="text-xs px-3 py-1 rounded-full 
//                          bg-white/10 text-white 
//                          border border-white/20"
//             >
//               {t}
//             </span>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-3">
//           <a
//             href={project.github}
//             target="_blank"
//             className="px-4 py-2 text-sm rounded-lg 
//                        border border-white/30 text-white
//                        hover:bg-white hover:text-black
//                        transition"
//           >
//             GitHub
//           </a>

//           <a
//             href={project.live}
//             target="_blank"
//             className="px-4 py-2 text-sm rounded-lg 
//                        bg-blue-500 text-white
//                        hover:bg-blue-600
//                        transition"
//           >
//             Live Demo
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
