import { fireEvent, render, screen } from '@testing-library/react';
import Input from '../components/Input';


describe('Input testing',() => {
  test('Button has Add Todo text', () => {
    render(<Input />);
    const button = screen.getByRole('button', 'Add Todo')
    expect(button).toHaveTextContent('Add Todo')
  });

  test('Button should be disabled', () => {
    render(<Input />);
    const button = screen.getByRole('button', 'Add Todo')
    expect(button).toBeDisabled()
  });

  test('Button should be enabled when writing text in input', () => {
    render(<Input />);
    const button = screen.getByRole('button', 'Add Todo')
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Some text' } })
    expect(button).toBeEnabled()
  });

  test('Button should be disabled after clicking', () => {
    render(<Input handleAddTodo={() =>{}} />);
    const button = screen.getByRole('button', 'Add Todo')
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Some text' } })
    fireEvent.click(button)
    expect(button).toBeDisabled()
    expect(input).toHaveValue("")

  });

  test('Input should have the value Some text', () => {
    render(<Input />);
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Some text' } })
    expect(input).toHaveValue('Some text')
  });
})