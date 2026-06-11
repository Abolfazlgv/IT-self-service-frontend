import { modules } from "../data/modules";
import { useResourceStore } from "../store/resourceStore";
import { useUserStore } from "../store/userStore";
import { useFavoriteStore } from "../store/favoriteStore";

export function useDashboardStats() {
  const { user } = useUserStore();

  const { favoriteIds } = useFavoriteStore();

  const resources = useResourceStore((state) => state.resources);

  const availableModules = modules.filter((module) =>
    module.roles.includes(user.role),
  );

  const availableResources = resources.filter((resource) =>
    resource.roles.includes(user.role),
  );

  return {
    modulesCount: availableModules.length,
    resourcesCount: availableResources.length,
    favoritesCount: favoriteIds.length,
  };
}
