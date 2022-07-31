import { useState } from "react";
import './styles.css'
export default function App() {
  const [todos, setTodos] = useState(["welocme", "hello"]);

  const [value, setValues] = useState("");

  function addItem(e) {
    e.preventDefault();

    if (!value) return;

    const newtodos = [...todos, value];

    setTodos(newtodos);

    setValues("");
  }

  function removeItem(e) {
    var index = Number(e.target.id);

    let temp = [...todos];

    temp.splice(index, 1);

    setTodos(temp);
  }

  return (
    <>
      <h1>TODO List</h1>
      <form className="form">
        <input
          type="text"
          className="input"
          placeholder="Add item"
          value={value}
          onChange={(e) => setValues(e.target.value)}
        />
        <input type="submit" onClick={addItem} />
      </form>
      {todos.map((item, i) => (
        <div className="todo" key={i} id={i} onClick={removeItem}>
          <li>{item}</li>
        </div>
      ))}
    </>
  );
}
