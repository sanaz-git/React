import React from 'react';

//dogPhoto
const DogPhoto = ({ dogPhoto }) => {
  return (
    <div>
      <img src={dogPhoto} alt="dog" />
    </div>
  );
};

export default DogPhoto;
