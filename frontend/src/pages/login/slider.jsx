// import React, { useState, useEffect } from 'react';

// const ImageCarousel = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [prevIndex, setPrevIndex] = useState(0);

//   const goToPrevious = () => {
//     setPrevIndex(currentIndex);
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setPrevIndex(currentIndex);
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Automatically go to the next image every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(goToNext, 5000); // 5 seconds
//     return () => clearInterval(timer); // Cleanup on component unmount
//   }, [currentIndex]);

//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       {/* Image Display */}
//       <div className="flex w-full h-full transition-transform duration-700 ease-in-out "
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//         }}
//       >
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index}`}
//             className="w-full h-full object-cover flex-shrink-0"
//             style={{
//               opacity: index === currentIndex ? 1 : 0.5,
//               transition: 'opacity 0.7s ease-in-out',
//             }}
//           />
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <button
//         onClick={goToPrevious}
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-r-lg"
//       >
//         &lt;
//       </button>
//       <button
//         onClick={goToNext}
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-l-lg"
//       >
//         &gt;
//       </button>

//       {/* Dots for indication */}
//       <div className="absolute bottom-4 w-full flex justify-center space-x-2">
//         {images.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => {
//               setPrevIndex(currentIndex);
//               setCurrentIndex(index);
//             }}
//             className={`w-2 h-2 rounded-full cursor-pointer ${
//               currentIndex === index ? 'bg-dark-purple' : 'bg-gray-400'
//             }`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;

import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const goToNext = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Automatically go to the next image every 5 seconds
  useEffect(() => {
    const timer = setInterval(goToNext, 5000); // 5 seconds
    return () => clearInterval(timer); // Cleanup on component unmount
  }, [currentIndex]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {/* Image Display */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover flex-shrink-0"
            style={{
              opacity: index === currentIndex ? 1 : 0.5,
              transition: 'opacity 0.7s ease-in-out',
            }}
          />
        ))}
      </div>

      {/* Dots for indication */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => {
              setPrevIndex(currentIndex);
              setCurrentIndex(index);
            }}
            className={`w-8 h-2 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
