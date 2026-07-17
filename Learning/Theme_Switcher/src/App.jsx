import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import Card from "./Components/Cart";

function App() {
  const [ThemeMode, setThemeMode] = useState("dark");

  const LightTheme = () => {
    setThemeMode("light");
  };

  const DarkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(ThemeMode);
  }, [ThemeMode]);

  return (
    <>
      <ThemeProvider value={{ ThemeMode, LightTheme, DarkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center justify-center bg-gray-100 transition-colors duration-300 dark:bg-gray-900">
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;