import React, { useState } from 'react';
import AlumniCard from './AlumniCard';

const AlumniCardSlider = ({ alumniData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < alumniData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="alumni-card-slider">
      <button onClick={handlePrevious}>&#60;</button>
      <AlumniCard alumni={alumniData[currentIndex]} />
      <button onClick={handleNext}>&#62;</button>
    </div>
  );
};

export default AlumniCardSlider;

// import React, { useEffect, useState } from 'react';
// import AlumniCard from './AlumniCard';

// const AlumniCardSlider = ({ alumniData }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setCurrentIndex((currentIndex + 1) % alumniData.length);
//     }, 2000);

//     return () => {
//       clearInterval(slideInterval);
//     };
//   }, [currentIndex, alumniData.length]);

//   return (
//     <div className="alumni-card-slider">
//       <div className="slider-viewport">
//         <div
//           className="slider"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//             width: `${alumniData.length * 100}%`,
//           }}
//         >
//           {alumniData.map((alumni, index) => (
//             <div key={index} className="slide">
//               <AlumniCard alumni={alumni} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AlumniCardSlider;
