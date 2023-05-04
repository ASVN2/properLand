import React from 'react';

const Button = ({ text, icons }) => {
  return (
    <div>
      <button className="p-2 bg-main text-white px-6 rounded-md">
        {text} {icons}
      </button>
    </div>
  );
};

export default Button;
