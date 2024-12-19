import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../components/TodoItem';

describe('TodoItem', () => {
  const mockTodo = {
    id: '1',
    text: 'Test todo',
    completed: false,
    createdAt: Date.now()
  };

  it('should render todo text', () => {
    const { getByText } = render(
      <TodoItem 
        todo={mockTodo}
        onToggle={() => {}}
        onDelete={() => {}}
      />
    );
    
    expect(getByText('Test todo')).toBeDefined();
  });

  it('should call onToggle when checkbox is clicked', () => {
    const onToggle = vi.fn();
    const { container } = render(
      <TodoItem 
        todo={mockTodo}
        onToggle={onToggle}
        onDelete={() => {}}
      />
    );
    
    const checkbox = container.querySelector('button');
    fireEvent.click(checkbox!);
    expect(onToggle).toHaveBeenCalledWith('1');
  });

  it('should call onDelete when delete button is clicked', () => {
    const onDelete = vi.fn();
    const { getByRole } = render(
      <TodoItem 
        todo={mockTodo}
        onToggle={() => {}}
        onDelete={onDelete}
      />
    );
    
    const deleteButton = getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);
    expect(onDelete).toHaveBeenCalledWith('1');
  });
});