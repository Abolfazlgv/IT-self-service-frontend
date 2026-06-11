import ResourceCard from "../cards/ResourceCard";
import { useFavoriteStore } from "../../store/favoriteStore";
import { resources } from "../../data/resources";

function QuickAccess() {
  const { favoriteIds } = useFavoriteStore();

  const favoriteResources = resources.filter(
    (resource) => favoriteIds.includes(resource.id)
  );

  const latestFavorites =
    favoriteResources.slice(-3).reverse();

  if (latestFavorites.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">
        Quick Access
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {latestFavorites.map((item) => (
          <ResourceCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default QuickAccess;