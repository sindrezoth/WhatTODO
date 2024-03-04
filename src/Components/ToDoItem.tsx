import React from "react";

function ToDoItem({ initialTodo }) {
  console.log(todo);
  const [todo, setTodo] = React.useState(
    initialTodo || {
      title: "",
      description: "",
      completed: false,
    },
  );

  return (
    <div>
      <p>TODO</p>
    </div>
  );
}

export default ToDoItem;
