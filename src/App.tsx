import { useState } from "react";
import "./App.css";
import ToDoList from "./Components/ToDoList.tsx";
import { nanoid } from "nanoid";

const initialList = [
  {
    title: "First todo",
    description: "this is todo 1",
    completed: false,
    id: nanoid(),
  },
  {
    title: "Another todo",
    description: "make it after 5 minutes",
    completed: false,
    id: nanoid(),
  },
];

function App() {
  return (
    <>
      <ToDoList initialList={initialList} />
    </>
  );
}

export default App;
