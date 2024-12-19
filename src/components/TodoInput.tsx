import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 
          bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
          focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
          focus:border-transparent placeholder-gray-400 dark:placeholder-gray-600
          transition-colors"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 
          hover:to-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 
          focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 
          transition-all duration-200 shadow-md hover:shadow-lg"
      >
        <PlusCircle className="w-5 h-5" />
      </button>
    </form>
  );
}