import React from 'react';

const AlumniCard = ({ alumni }) => {
  return (
    <div className="alumni-card">
      <img src={alumni.imageUrl} alt={`${alumni.firstName} ${alumni.lastName}`} />
      <h3>{`${alumni.firstName} ${alumni.lastName}`}</h3>
      <p>Batch: {alumni.startYear}-{alumni.endYear}</p>
      <p>Degree: {alumni.degree}</p>
      <p>Branch: {alumni.branch}</p>
      <p>Roll Number: {alumni.rollNumber}</p>
      {/* Add more alumni details here */}
    </div>
  );
};

export default AlumniCard;
