import React, { useState, useEffect } from 'react';
import Joke from './Joke';

const RandomJoke = () => {
  const [joke, setJoke] = useState({});

  const fetchData = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setJoke(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="joke">
      <Joke joke={joke} />
    </div>
  );
};
export default RandomJoke;
