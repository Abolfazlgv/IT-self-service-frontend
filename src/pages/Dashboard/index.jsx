import { modules } from "../../data/modules";

import ModuleCard from "../../components/cards/ModuleCard";
import StatsCard from "../../components/dashboard/StatsCard";
import QuickAccess from "../../components/dashboard/QuickAccess";

import { useUserStore } from "../../store/userStore";
import { useDashboardStats } from "../../hooks/useDashboardStats";

function Dashboard() {
  const {
    modulesCount,
    resourcesCount,
    favoritesCount,
  } = useDashboardStats();

  const { user } = useUserStore();

  const allowedModules = modules.filter(
    (module) =>
      module.roles.includes(user.role)
  );

  return (
    <div>
      <div className="mb-8">
        <h1
          className="
            text-3xl
            font-bold

            text-slate-900
            dark:text-white
          "
        >
          Welcome, {user.name}
        </h1>

        <p
          className="
            mt-2
            text-slate-500
            dark:text-slate-400
          "
        >
          Access your available services.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <StatsCard
          title="Services"
          value={modulesCount}
        />

        <StatsCard
          title="Resources"
          value={resourcesCount}
        />

        <StatsCard
          title="Favorites"
          value={favoritesCount}
        />
      </div>

      <QuickAccess />

      <div
        className="
          mt-8
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >
        {allowedModules.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;