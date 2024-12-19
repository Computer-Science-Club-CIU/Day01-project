import React from 'react';
import { CheckSquare } from 'lucide-react';

export function TodoHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-2 mb-2">
        <CheckSquare className="w-8 h-8 text-blue-500 dark:text-blue-400" />
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
          Todo List
        </h1>
      </div>
      <p className="text-gray-600 dark:text-gray-400">Stay organized and productive</p>
    </div>
  );
}