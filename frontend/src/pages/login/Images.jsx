import React from 'react';
import ImageCarousel from './ImageCarousel';

const images = [
  '../public/p1.jpg',
  'https://pixabay.com/photos/pregnancy-heart-woman-pregnant-7214373/',
  'https://pixabay.com/photos/woman-pregnant-pregnancy-mom-5857744/',
  // Add more images as needed
];

function Images() {
  return (
    <div className="App">
      <ImageCarousel images={images} />
    </div>
  );
}

export default Images;
