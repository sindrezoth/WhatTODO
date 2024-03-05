import React from "react";
import ToDoItem from "./ToDoItem";
import { nanoid } from "nanoid";

function ToDoList({ initialList }) {
  const [list, setList] = React.useState(initialList || []);
  const [newTodo, setNewTodo] = React.useState({
    title: "",
    description: "",
    completed: false,
    id: nanoid(),
  });

  function addToDo() {
    setList([...list, { ...newTodo }]);
    setNewTodo({ title: "", description: "", completed: false, id: nanoid() });
  }

  function updateTodo(todoupd) {
    setList(
      list.map((todo) => (todo.id === todoupd.id ? { ...todoupd } : todo)),
    );
  }

  function deleteTodo(delTodo) {
    setList(list.filter((todo) => todo.id !== delTodo.id));
  }

  return (
    <div className="todo-list">
      <p>TODO LIST</p>
      {list.length !== 0 ? (
        list.map((todo) => (
          <ToDoItem
            key={todo.id}
            initialTodo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <p>No todos yet</p>
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
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
        <input
          value={newTodo.description}
          placeholder="Description"
          onChange={(e) =>
            setNewTodo({
              ...newTodo,
              description: e.target.value,
            })
          }
        ></input>
        <input
          value={newTodo.completed.toString()}
          placeholder="Completed"
          type="checkbox"
          onChange={(e) =>
            setNewTodo({
              ...newTodo,
              completed: Boolean(e.target.value),
            })
          }
        ></input>
        <button onClick={addToDo}>Add</button>
      </div>
    </div>
  );
}

export default ToDoList;
