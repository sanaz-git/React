import React from 'react';

const Button = ({ setCount }) => {
  return (
    <button className="button" onClick={() => setCount((num) => num + 1)}>
      add 1
    </button>
  );
};

export default Button;
