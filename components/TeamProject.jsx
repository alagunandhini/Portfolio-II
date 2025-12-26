export default function TeamProject({ project }) {
  return (
    <div className="grid grid-cols-2 gap-10 items-start">

      {/* LEFT – PROJECT CARD */}
      <div>
        <img
          src={project.image}
          alt={project.title}
          className="rounded-3xl w-full object-cover"
        />
      </div>

      {/* RIGHT – ABOUT */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          {project.title}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          {project.description}
          <br /><br />
          This project was built as a team effort focusing on collaboration,
          planning, and real-world problem solving.
        </p>

        <div className="flex gap-4">
          <a href={project.github} className="text-gray-700 font-medium">
            GitHub →
          </a>
          <a href={project.live} className="text-blue-600 font-medium">
            Live →
          </a>
        </div>
      </div>

    </div>
  );
}
