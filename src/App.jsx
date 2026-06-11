import AppRouter from "./routes/AppRouter";
import { useThemeStore } from "./store/themeStore";

function App() {
  const { theme } = useThemeStore();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <AppRouter />
    </div>
  );
}

export default App;