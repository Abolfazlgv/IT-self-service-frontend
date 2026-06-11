function AccessDenied() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-5xl font-bold text-red-500">
        403
      </h1>

      <h2 className="text-2xl font-semibold mt-4">
        Access Denied
      </h2>

      <p className="text-slate-500 mt-2">
        You don't have permission to view this page.
      </p>
    </div>
  );
}

export default AccessDenied;