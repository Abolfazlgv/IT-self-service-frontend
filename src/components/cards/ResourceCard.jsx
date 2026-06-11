import { FaStar } from "react-icons/fa";
import { useFavoriteStore } from "../../store/favoriteStore";
import { useUserStore } from "../../store/userStore";

function ResourceCard({ item }) {
  const { favoriteIds, addFavorite, removeFavorite } = useFavoriteStore();
  const user = useUserStore((state) => state.user);

  const isFavorite = favoriteIds.includes(item.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      removeFavorite(item.id, user?.id);
    } else {
      addFavorite(item.id, user?.id);
    }
  };

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="
        block
        p-5
        rounded-xl
        border
        shadow-sm
        transition

        bg-white
        dark:bg-slate-800

        border-slate-200
        dark:border-slate-700

        hover:shadow-md
      "
    >
      <div className="flex justify-between items-start">
        <h3
          className="
            text-lg
            font-semibold

            text-slate-900
            dark:text-white
          "
        >
          {item.title}
        </h3>

        <button
          type="button"
          onClick={handleFavoriteClick}
          className="cursor-pointer"
        >
          <FaStar
            className={
              isFavorite
                ? "text-yellow-400"
                : "text-slate-300 dark:text-slate-600"
            }
          />
        </button>
      </div>

      <p
        className="
          mt-2
          text-slate-500
          dark:text-slate-300
        "
      >
        {item.description}
      </p>

      <span
        className="
          inline-block
          mt-4
          px-3
          py-1
          text-sm
          rounded-full

          bg-slate-100
          dark:bg-slate-700

          text-slate-700
          dark:text-slate-200
        "
      >
        {item.category}
      </span>
    </a>
  );
}

export default ResourceCard;
