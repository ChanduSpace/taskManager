import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

const Task = ({ task }) => {
  const { updateTask, deleteTask } = useTaskContext();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  return (
    <div className="task" draggable onDragStart={handleDragStart}>
      {editing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button
            onClick={() => {
              updateTask(task.id, text);
              setEditing(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <p>{task.text}</p>
          <div className="actions">
            <button onClick={() => setEditing(true)}>✏️</button>
            <button onClick={() => deleteTask(task.id)}>🗑️</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
