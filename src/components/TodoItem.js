import React, { useState } from "react";

const TodoItem = ({ todo, handleDelete }) => {
  const [edited, setEdited] = useState({ index: undefined, status: false });
  console.log(edited)
  return (
    <div data-testid="todo-item">
      {edited.index === todo && edited.status ? <input /> : <div>{todo}</div>}
      <button onClick={() => {
        setEdited({ index: edited.status === false ? todo : undefined, status: !edited.status })
      }}>Edit</button>
      <button onClick={() => handleDelete(todo)}>Delete</button>
    </div>
  );
};

export default TodoItem;
