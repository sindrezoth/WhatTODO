import React from "react";
import ToDoItem from "./ToDoItem";
import NewToDo from "./NewToDo";
import { ToDo } from "../App";

function ToDoList({ initialList }: { initialList?: ToDo[] }) {
  const [list, setList] = React.useState(initialList || []);

  function addToDo(newTodo: ToDo) {
    setList([...list, { ...newTodo }]);
  }

  function updateTodo(todoupd: ToDo) {
    setList(
      list.map((todo) => (todo.id === todoupd.id ? { ...todoupd } : todo)),
    );
  }

  function deleteTodo(delTodo: ToDo) {
    setList(list.filter((todo) => todo.id !== delTodo.id));
  }

  return (
    <div className="todo-list">
      <NewToDo addToDo={addToDo} />

      <p className="list-title">TODO LIST</p>
      {list.filter((todo) => !todo.completed).length !== 0 ? (
        list
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))
      ) : (
        <p>No ToDos yet</p>
      )}

      <p className="list-title">COMPLETED TODOS</p>
      {list.filter((todo) => todo.completed).length !== 0 ? (
        list
          .filter((todo) => todo.completed)
          .map((todo) => (
            <ToDoItem
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))
      ) : (
        <p>No complited ToDos</p>
      )}
    </div>
  );
}

export default ToDoList;
