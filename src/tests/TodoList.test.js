import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import TodoList from "../components/TodoList";

const mockTodoList = ["Eat", "Sleep", "Rave", "Repeat"];

describe("TodoList testing", () => {
  test("TodoList should display list", () => {
    render(<TodoList toDoList={mockTodoList} handleDelete={() => { }} />);
    const todoList = screen.getByTestId("todo-list");
    let arrayChildren = Array.from(todoList.children);
    arrayChildren = arrayChildren.map((val) => {
      return val.children[0].innerHTML;
    });
    expect(mockTodoList).toEqual(arrayChildren);
  });
  test("TodoList first element is deleted when clicked", () => {
    render(<App />);
    const todoList = screen.getByTestId("todo-list");
    let child = Array.from(todoList.children)[0];
    const childText = child.children[0].innerHTML
    fireEvent.click(child.children[1]);
    const newArrayChildren = Array.from(todoList.children).map(
      (val) => val.children[0].innerHTML
    );
    expect(newArrayChildren).not.toContain(childText);
  });
});
