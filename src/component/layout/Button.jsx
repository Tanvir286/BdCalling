import React from 'react';

const Button = ({ text , onClick}) => {
  return (
   
      <button
        className="font-rubik-semibold text-orange px-5 py-2 border border-orange rounded-lg"
        onClick={onClick}
      >
        {text}
      </button>
    
  );
};

export default Button;
