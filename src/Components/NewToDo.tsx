import React from "react";
import { nanoid } from "nanoid";

function NewToDo({ addToDo }) {
  const [newTodo, setNewTodo] = React.useState({
    title: "",
    description: "",
    completed: false,
    id: nanoid(),
  });

  return (
    <div className="new-todo">
      <p>New To Do</p>
      <input
        value={newTodo.title}
        placeholder="Title"
        onChange={(e) =>
          setNewTodo({
            ...newTodo,
            title: e.target.value,
          })
        }
      ></input>
      <textarea
        value={newTodo.description}
        placeholder="Description"
        onChange={(e) =>
          setNewTodo({
            ...newTodo,
            description: e.target.value,
          })
        }
      ></textarea>
      <button
        onClick={(e) => {
          setNewTodo({
            title: "",
            description: "",
            completed: false,
            id: nanoid(),
          });
          addToDo(newTodo);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default NewToDo;
