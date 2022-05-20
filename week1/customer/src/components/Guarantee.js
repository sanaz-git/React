import React from 'react';

const Guarantee = ({ img, title, description }) => {
  return (
    <div>
      <img src={img} height="80" width="100" alt="guarantee" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Guarantee;
