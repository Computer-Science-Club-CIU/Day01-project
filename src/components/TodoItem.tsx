import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg 
      shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 
      dark:border-gray-700/50 group">
      <button
        onClick={() => onToggle(todo.id)}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center 
          transition-colors duration-200 ${
          todo.completed 
            ? 'bg-green-500 border-green-500 dark:bg-green-600 dark:border-green-600' 
            : 'border-gray-300 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-400'
        }`}
      >
        {todo.completed && <Check className="w-4 h-4 text-white" />}
      </button>
      
      <span className={`flex-1 transition-colors duration-200 ${
        todo.completed 
          ? 'line-through text-gray-500 dark:text-gray-400' 
          : 'text-gray-700 dark:text-gray-200'
      }`}>
        {todo.text}
      </span>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="text-gray-400 hover:text-red-500 dark:text-gray-500 
          dark:hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all duration-200"
        aria-label="Delete todo"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}