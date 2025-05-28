import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import Task from "./Task";

const Column = ({ status }) => {
  const { tasks, addTask, moveTask } = useTaskContext();
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      addTask(text, status);
      setText("");
    }
  };

  const handleDrop = (e) => {
    const id = e.dataTransfer.getData("taskId");
    moveTask(Number(id), status);
  };

  return (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2>{status}</h2>
      {tasks
        .filter((t) => t.status === status)
        .map((task) => (
          <Task key={task.id} task={task} />
        ))}
      <div className="add-task">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New task..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default Column;
