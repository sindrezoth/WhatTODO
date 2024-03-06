import { useState } from "react";
import { ToDo } from "../App";

function ToDoItem({
  todo,
  updateTodo,
  deleteTodo,
}: {
  todo: ToDo;
  updateTodo: (todo: ToDo) => void;
  deleteTodo: (todo: ToDo) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <div className="todo-item-editing">
          <input
            type="text"
            value={todo.title}
            placeholder="Title"
            onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
          ></input>
          <textarea
            value={todo.description}
            placeholder="Description"
            onChange={(e) =>
              updateTodo({ ...todo, description: e.target.value })
            }
          ></textarea>
        </div>
      ) : (
        <div className="todo-item">
          <div style={{ display: "table-caption" }}>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
          </div>
          <input
            className="complete-checkbox"
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={(e) =>
              updateTodo({ ...todo, completed: e.target.checked })
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
        <button onClick={() => deleteTodo(todo)}>Delete</button>
      </div>
    </>
  );
}

export default ToDoItem;
