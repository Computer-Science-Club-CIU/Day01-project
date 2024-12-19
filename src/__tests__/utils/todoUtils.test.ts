import { describe, it, expect } from 'vitest';
import { createTodo, sortTodos, filterTodos } from '../../utils/todoUtils';

describe('todoUtils', () => {
  it('should create a new todo', () => {
    const todo = createTodo('Test todo');
    
    expect(todo).toEqual({
      id: expect.any(String),
      text: 'Test todo',
      completed: false,
      createdAt: expect.any(Number)
    });
  });

  it('should sort todos by creation date', () => {
    const todos = [
      { id: '1', text: 'Old', completed: false, createdAt: 1000 },
      { id: '2', text: 'New', completed: false, createdAt: 2000 }
    ];

    const sorted = sortTodos(todos);
    expect(sorted[0].text).toBe('New');
    expect(sorted[1].text).toBe('Old');
  });

  it('should filter todos correctly', () => {
    const todos = [
      { id: '1', text: 'Active', completed: false, createdAt: 1000 },
      { id: '2', text: 'Completed', completed: true, createdAt: 2000 }
    ];

    expect(filterTodos(todos, 'active')).toHaveLength(1);
    expect(filterTodos(todos, 'completed')).toHaveLength(1);
    expect(filterTodos(todos, 'all')).toHaveLength(2);
  });
});