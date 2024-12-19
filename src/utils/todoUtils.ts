import { Todo } from '../types/todo';

export const createTodo = (text: string): Todo => ({
  id: crypto.randomUUID(),
  text: text.trim(),
  completed: false,
  createdAt: Date.now(),
});

export const sortTodos = (todos: Todo[]): Todo[] => {
  return [...todos].sort((a, b) => b.createdAt - a.createdAt);
};

export const filterTodos = (todos: Todo[], filter: 'all' | 'active' | 'completed'): Todo[] => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};