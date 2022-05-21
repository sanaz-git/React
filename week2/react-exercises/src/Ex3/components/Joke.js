import React from "react";

const Joke = ({ joke }) => {
  return (
    <div>
      <p> {joke.value} </p>
    </div>
  );
};

export default Joke;
