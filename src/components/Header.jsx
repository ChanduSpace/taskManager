import React from "react";
import { useTaskContext } from "../context/TaskContext";

const Header = () => {
  const { darkMode, setDarkMode } = useTaskContext();

  return (
    <header className="header">
      <h1>Task Manager</h1>
      <button className="mode-button" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
