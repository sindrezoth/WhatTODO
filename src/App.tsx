import { useState } from "react";
import "./App.css";
import ToDoList from "./Components/ToDoList.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToDoList />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
