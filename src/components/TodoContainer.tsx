import React, { ReactNode } from 'react';

interface TodoContainerProps {
  children: ReactNode;
}

export function TodoContainer({ children }: TodoContainerProps) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg shadow-black/5 dark:shadow-black/20 p-6 space-y-6 border border-gray-200/50 dark:border-gray-700/50">
      {children}
    </div>
  );
}