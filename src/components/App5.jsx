import { useState } from "react";
import { Link } from "react-router-dom";
export default function App5() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState();
  const handleSubmit = () => {
    setTodos([...todos, task]);
    setTask("");
  };
  const handleDelete=(task)=>{
    setTodos(todos.filter((todo)=>task!==todo))
  }
  return (
    <p>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task"
      ></input>
      <button onClick={handleSubmit}>Submit</button>
      <hr />
      {todos.map((todo, index) => (
        <li key={index}>{todo}-<button onClick={()=>handleDelete(task)}>Delete</button></li>
      ))}
    </p>
  );
}
