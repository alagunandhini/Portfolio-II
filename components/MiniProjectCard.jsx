export default function MiniProjectCard({ project }) {
  return (
    <div className="rounded-2xl bg-white p-4 border border-gray-200 shadow-sm">
      <h4 className="text-sm font-semibold">{project.title}</h4>
      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
        {project.description}
      </p>

      <div className="flex gap-3 mt-3 text-xs">
        <a href={project.github} className="text-gray-600">GitHub</a>
        <a href={project.live} className="text-blue-600">Live</a>
      </div>
    </div>
  );
}
