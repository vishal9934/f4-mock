import { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
    return (
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        ))}
      </ul>
    );
  }
   function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);
  
    function handleEdit() {
      setIsEditing(true);
    }
  
    function handleCancel() {
      setIsEditing(false);
      setNewText(task.text);
    }
  
    function handleSave() {
      onChange({ ...task, text: newText });
      setIsEditing(false);
    }
  
    function handleDelete() {
      onDelete(task.id);
    }
  
    function handleChange(e) {
      setNewText(e.target.value);
    }
  
    return (
      <li>
        {isEditing ? (
          <>
            <input type="text" value={newText} onChange={handleChange} />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <span>{task.text}</span>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </li>
    );
  }