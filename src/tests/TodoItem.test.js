import { render, screen } from "@testing-library/react";
import TodoItem from "../components/TodoItem";

describe("TodoItem testing", () => {
  test("TodoItem should display item", () => {
    render(<TodoItem todo="Todo1" handleDelete={() => {}} />);
    const component = screen.getByTestId("todo-item");
    expect(component.children[0].innerHTML).toEqual("Todo1");
  });
});
