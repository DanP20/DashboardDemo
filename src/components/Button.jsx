import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-accent text-white rounded px-4 py-2 transition duration-200 ease-in-out hover:bg-yellow-500 shadow"
    >
      {children}
    </button>
  );
};

export default Button; 