import React from "react";
import ToDoItem from "./ToDoItem";
import NewToDo from "./newToDo";
import { nanoid } from "nanoid";

function ToDoList({ initialList }) {
  const [list, setList] = React.useState(initialList || []);
  const [newTodo, setNewTodo] = React.useState({
    title: "",
    description: "",
    completed: false,
    id: nanoid(),
  });

  function addToDo(newTodo) {
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
      <p className="list-title">TODO LIST</p>
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

      <NewToDo addToDo={addToDo} />
    </div>
  );
}

export default ToDoList;
