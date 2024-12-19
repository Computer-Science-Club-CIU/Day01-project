import { useState, useEffect } from 'react';
import { Todo } from '../types/todo';
import { loadFromStorage, saveToStorage } from '../utils/localStorage';
import { createTodo, sortTodos } from '../utils/todoUtils';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(() => loadFromStorage<Todo>());

  useEffect(() => {
    saveToStorage(todos);
  }, [todos]);

  const addTodo = (text: string) => {
    setTodos(prev => sortTodos([createTodo(text), ...prev]));
  };

  const toggleTodo = (id: string) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
}