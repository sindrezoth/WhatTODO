import React from "react";

function ToDoItem({ initialTodo, updateTodo, deleteTodo }) {
  console.log(initialTodo.title);
  const [todo, setTodo] = React.useState(
    initialTodo || {
      title: "",
      description: "",
      completed: false,
    },
  );

  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={initialTodo.title}
            onChange={(e) =>
              updateTodo({ ...initialTodo, title: e.target.value })
            }
          ></input>
          <input
            type="text"
            value={initialTodo.description}
            onChange={(e) =>
              updateTodo({ ...initialTodo, description: e.target.value })
            }
          ></input>
          <button onClick={() => deleteTodo(todo)}>Delete</button>
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
      ) : (
        <>
          <p>{initialTodo.title}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <input
        type="checkbox"
        value={initialTodo.completed}
        onChange={(e) =>
          updateTodo({ ...initialTodo, completed: Boolean(e.target.value) })
        }
      ></input>
      <button onClick={() => deleteTodo(todo)}>Delete</button>
    </div>
  );
}

export default ToDoItem;
