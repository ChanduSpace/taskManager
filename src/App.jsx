import React from "react";
import { TaskProvider } from "./context/TaskContext.jsx";

import Header from "./components/Header";
import Column from "./components/Column";
import "./index.css";

const App = () => {
  const columns = ["To Do", "In Progress", "Done"];

  return (
    <TaskProvider>
      <div className="app">
        <Header />
        <div className="columns">
          {columns.map((col) => (
            <Column key={col} status={col} />
          ))}
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;
