import React, { useState } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);

  const getDogPhoto = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((responseData) => responseData.json())
      .then((data) => {
        // let test = dogPhotos
        // dogPhotos.push(data.message)
        // console.log(test)
        setDogPhotos([...dogPhotos, data.message]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(dogPhotos);
  return (
    <div>
      <Button getDogPhoto={getDogPhoto} />
      <div className="dogImg">
        {dogPhotos &&
          dogPhotos.map((dogPhoto, index) => (
            <DogPhoto key={index} dogPhoto={dogPhoto} />
          ))}
      </div>
    </div>
  );
};

export default DogGallery;
