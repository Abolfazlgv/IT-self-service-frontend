import ResourceCard from "../../components/cards/ResourceCard";

import { useResourceStore } from "../../store/resourceStore";
import { useFavoriteStore } from "../../store/favoriteStore";

function Favorites() {
  const { favoriteIds } = useFavoriteStore();
  
  const resources = useResourceStore((state) => state.resources);
  const favoriteResources = resources.filter((resource) =>
    favoriteIds.includes(resource.id),
  );
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Favorites</h1>

      {favoriteResources.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {favoriteResources.map((item) => (
            <ResourceCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
