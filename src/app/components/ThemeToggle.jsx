"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);

    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-white/20 bg-white/70 px-4 py-2 text-sm font-black shadow-sm transition hover:scale-105 dark:bg-white/10"
    >
      {dark ? "🌙 ليلي" : "☀️ نهاري"}
    </button>
  );
}