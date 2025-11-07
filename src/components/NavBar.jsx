import { useState, useEffect } from "react";
import SettingsMode from "./SettingsMode";

export default function Navbar({ resetGame }) {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [openSettings, setOpenSettings] = useState(false);

  useEffect(() => {
    // Apply theme to <html>
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    // Disable page scroll while modal is open
    if (openSettings) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [openSettings]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full border-b bg-white/70 dark:bg-gray-900/70 backdrop-blur-md px-6 py-4 flex items-center justify-between shadow-sm z-40">
        <h1   onClick={resetGame} className="text-3xl font-bold tracking-wide text-gray-900 dark:text-gray-100 cursor-pointer">
          Wordle
        </h1>

        <div className="flex items-center gap-4 text-xl">
          <button
            onClick={() => setOpenSettings(true)}
            className="hover:scale-110 transition-transform"
          >
            ⚙️
          </button>
        </div>
      </header>

      {openSettings && (
        <SettingsMode
          close={() => setOpenSettings(false)}
          dark={dark}
          setDark={setDark}
        />
      )}
    </>
  );
}
