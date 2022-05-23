import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ toDoList, handleDelete  }) => {
  return (
    <div data-testid="todo-list">
      {toDoList.map((todo, i) => (
        <TodoItem key={i} todo={todo} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default TodoList;
