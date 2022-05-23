import React, { useState } from 'react';
import Input from './components/Input';
import TodoList from './components/TodoList';

function App() {
  const [toDoList, setTodoList] = useState(["Eat", "Sleep", "Rave", "Repeat"])

  const handleAddTodo = (todo) => setTodoList([...toDoList, todo])

  const handleDelete = (todo) => setTodoList(toDoList.filter((val)=>val!==todo))
  return (
    <div className="App">
      <Input handleAddTodo={handleAddTodo} />
      <TodoList handleDelete={handleDelete} toDoList={toDoList}/>
    </div>
  );
}

export default App;
