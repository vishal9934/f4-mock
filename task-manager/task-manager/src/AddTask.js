import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  function handleAddClick() {
    if (text.trim() === "") {
      return; // Don't add empty tasks
    }
    onAddTask(text);
    setText("");
  }

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddClick}>Add</button>
    </>
  );
}