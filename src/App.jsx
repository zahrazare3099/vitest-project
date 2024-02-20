import { useState } from "react";
import "./App.css";
import AddNote from "./addNote/AddNote";
import Header from "./header/Header";
import NoteList from "./notesList/NoteList";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Header title="test for title" />
      <AddNote todos={todos} setTodos={setTodos} />
      <NoteList todos={todos} />
    </>
  );
}
