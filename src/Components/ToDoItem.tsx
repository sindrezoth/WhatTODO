import React from "react";

function ToDoItem({ initialTodo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <>
      {isEditing ? (
        <div className="todo-item-editing">
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
        </div>
      ) : (
        <div className="todo-item">
          <p>{initialTodo.title}</p>
          <input
            className="complete-checkbox"
            type="checkbox"
            value={initialTodo.completed}
            onChange={(e) =>
              updateTodo({ ...initialTodo, completed: Boolean(e.target.value) })
            }
          ></input>
        </div>
      )}
      <div className="todo-item-buttons">
        {isEditing ? (
          <button onClick={() => setIsEditing(false)}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={() => deleteTodo(initialTodo)}>Delete</button>
      </div>
    </>
  );
}

export default ToDoItem;
