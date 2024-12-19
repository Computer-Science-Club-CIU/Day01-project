import React from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { TodoStats } from './components/TodoStats';
import { TodoHeader } from './components/TodoHeader';
import { TodoContainer } from './components/TodoContainer';
import { ThemeToggle } from './components/ThemeToggle';
import { useTodos } from './hooks/useTodos';

export function App() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>
        
        <TodoHeader />

        <TodoContainer>
          <TodoInput onAdd={addTodo} />
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </TodoContainer>

        <div className="mt-4">
          <TodoStats todos={todos} />
        </div>
      </div>
    </div>
  );
}