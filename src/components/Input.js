import React, { useState } from "react";

const Input = ({ handleAddTodo }) => {
  const [toDo, setTodo] = useState("");

  return (
    <div>
      <input value={toDo} type="text" onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => {
        handleAddTodo(toDo)
        setTodo("")
      }} disabled={toDo.trim() === ""}>Add Todo</button>
    </div>
  );
};

export default Input;
