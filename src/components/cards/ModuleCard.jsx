import { Link } from "react-router-dom";

function ModuleCard({ module }) {
  const Icon = module.icon;

  return (
    <Link
      to={module.path}
      className="rounded-xl p-6 shadow-sm border transition bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-md"
    >
      <Icon className="text-4xl mb-4 text-blue-600" />

      <h3
        className="
          text-lg
          font-semibold

          text-slate-900
          dark:text-white
        "
      >
        {module.title}
      </h3>

      <p
        className="
          mt-2
          text-slate-500
          dark:text-slate-300
        "
      >
        {module.description}
      </p>
    </Link>
  );
}

export default ModuleCard;
