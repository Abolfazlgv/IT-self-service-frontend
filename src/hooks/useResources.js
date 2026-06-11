import { useResourceStore } from "../store/resourceStore";
import { useUserStore } from "../store/userStore";

export function useResources(type) {
  const resources = useResourceStore((state) => state.resources);

  const { user } = useUserStore();

  return resources.filter(
    (resource) => resource.type === type && resource.roles.includes(user?.role),
  );
}
