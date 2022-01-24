import type { ReactNode } from 'react';

export interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export const Button = ({ onClick, children }: ButtonProps) => (
  <button
    onClick={onClick}
    className="px-4 py-2 border-2 bg-gray-700 text-gray-200 dark:text-gray-700 dark:bg-gray-200"
  >
    {children}
  </button>
);
