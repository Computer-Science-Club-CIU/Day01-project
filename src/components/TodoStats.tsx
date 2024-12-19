import React from 'react';
import { Todo } from '../types/todo';

interface TodoStatsProps {
  todos: Todo[];
}

export function TodoStats({ todos }: TodoStatsProps) {
  const completedCount = todos.filter(t => t.completed).length;
  
  return (
    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
      {todos.length} {todos.length === 1 ? 'task' : 'tasks'} •{' '}
      {completedCount} completed
    </div>
  );
}