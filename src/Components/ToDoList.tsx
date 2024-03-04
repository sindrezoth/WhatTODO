import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ initialList }) {
  const [list, setList] = React.useState(initialList);

  return (
    <>
      <p>TODO LIST</p>
      {/* 
            list &&
            list.map((todo) => <ToDoItem key={todo.id} initialTodo={todo} />)
         */}
    </>
  );
}

export default ToDoList;
