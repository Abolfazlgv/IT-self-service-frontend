import { useSearchStore } from "../../store/searchStore";

function SearchDropdown({ results }) {
  const {
    isOpen,
    activeIndex,
    setActiveIndex,
    resetSearch,
  } = useSearchStore();

  if (!isOpen || !results.length) return null;

  const handleSelect = (item) => {
    window.open(item.url, "_blank");
    resetSearch();
  };

  return (
    <div className="absolute top-12 left-0 w-full bg-white dark:bg-slate-800 border rounded-lg shadow-lg z-50 overflow-hidden">

      {results.map((item, index) => (
        <div
          key={item.id}
          onClick={() => handleSelect(item)}
          onMouseEnter={() => setActiveIndex(index)}
          className={`
            px-3 py-2 cursor-pointer
            ${
              activeIndex === index
                ? "bg-slate-100 dark:bg-slate-700"
                : "hover:bg-slate-100 dark:hover:bg-slate-700"
            }
          `}
        >
          <div className="font-medium text-slate-900 dark:text-white">
            {item.title}
          </div>
          <div className="text-sm text-slate-500">
            {item.description}
          </div>
        </div>
      ))}

    </div>
  );
}

export default SearchDropdown;