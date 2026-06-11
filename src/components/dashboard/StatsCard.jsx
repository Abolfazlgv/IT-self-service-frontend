function StatsCard({
  title,
  value,
}) {
  return (
    <div
      className="
        p-5
        rounded-xl
        shadow-sm
        border

        bg-white
        dark:bg-slate-800

        border-slate-200
        dark:border-slate-700
      "
    >
      <h3
        className="
          text-slate-500
          dark:text-slate-400
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          text-3xl
          font-bold

          text-slate-900
          dark:text-white
        "
      >
        {value}
      </p>
    </div>
  );
}

export default StatsCard;