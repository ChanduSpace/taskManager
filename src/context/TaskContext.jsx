import React, { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  const addTask = (text, status) => {
    const newTask = {
      id: Date.now(),
      text,
      status,
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, newText) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const moveTask = (id, newStatus) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: newStatus } : t)));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        moveTask,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
