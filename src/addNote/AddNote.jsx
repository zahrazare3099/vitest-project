import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function AddNote({ todos, setTodos }) {
  const [todo, setTodo] = useState();
  const addTodo = () => {
    if (!todo) return;
    let updateTodo = [
      ...todos,
      { id: Date.now(), task: todo, complete: false },
    ];
    setTodos(updateTodo);
    setTodo("");
  };
  return (
    <div>
      <label htmlFor="todo">todo</label>
      <input
        type="text"
        id="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
