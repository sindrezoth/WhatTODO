function NewToDo({ addToDo }) {
  const [newTodo, setNewTodo] = React.useState({
    title: "",
    description: "",
    completed: false,
    id: nanoid(),
  });

  return (
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
      <button
        onClick={(e) => {
          addToDo(newTodo);
          setNewTodo({
            title: "",
            description: "",
            completed: false,
            id: nanoid(),
          });
        }}
      >
        Add
      </button>
    </div>
  );
}
