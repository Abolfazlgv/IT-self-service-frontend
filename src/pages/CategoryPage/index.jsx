import { useParams, Navigate } from "react-router-dom";

import ResourceCard from "../../components/cards/ResourceCard";

import { modules } from "../../data/modules";
import { useResources } from "../../hooks/useResources";

function CategoryPage() {
  const { type } = useParams();

  const module = modules.find((item) => item.id === type);

  if (!module) {
    return <Navigate to="/" replace />;
  }

  const resources = useResources(type);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{module.title}</h1>

        <p className="text-slate-500 mt-2">{module.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {resources.map((item) => (
          <ResourceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
