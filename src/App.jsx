import { useState } from "react";
import AddNote from "./addNote/AddNote";
import Header from "./header/Header";
import NoteList from "./notesList/NoteList";
import useCounter from "./hooks/useCounter";
import UserList from "./userList/UserList";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  const [todos, setTodos] = useState([]);
  const { count, decrement, increment } = useCounter();

  return (
    <>
      <GlobalStyle />
      <Header
        title="test for title"
        count={count}
        decrement={decrement}
        increment={increment}
      />
      <AddNote todos={todos} setTodos={setTodos} />
      <NoteList todos={todos} />
      <UserList />
    </>
  );
}
