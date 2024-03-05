import { useState, useRef, useEffect } from "react";

function ToDoItem({ initialTodo: todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const todoRef = useRef();

  useEffect(() => {
    todoRef.current.onHover = () => {
      console.log(todo.id);
    };
  }, []);
  useEffect(() => {
    console.log(todoRef.current);
  }, [todoRef]);

  return (
    <>
      {isEditing ? (
        <div className="todo-item-editing">
          <input
            type="text"
            value={todo.title}
            onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
          ></input>
          <textarea
            value={todo.description}
            onChange={(e) =>
              updateTodo({ ...todo, description: e.target.value })
            }
          ></textarea>
        </div>
      ) : (
        <div ref={todoRef} className="todo-item">
          <div>
            <p>{todo.title}</p>
            <p>{todo.description}</p>
          </div>
          <input
            className="complete-checkbox"
            type="checkbox"
            value={todo.completed}
            onChange={(e) =>
              updateTodo({ ...todo, completed: Boolean(e.target.value) })
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
