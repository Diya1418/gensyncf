import React from 'react';
import AlumniCard from './AlumniCard';

const AlumniCardList = ({ alumniData }) => {
  return (
    <div className="alumni-card-list">
      <h2>All Alumni</h2>
      {alumniData.map((alumni) => (
        <AlumniCard key={alumni._id} alumni={alumni} />
      ))}
    </div>
  );
};

export default AlumniCardList;
