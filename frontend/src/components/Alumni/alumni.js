import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AlumniCardSlider from './AlumniCardSlider';
import AlumniCardList from './AlumniCardList';
import {alumniData} from './alumniData';
import axios from 'axios';

function Alumni() {


  useEffect(() => {
    // Fetch alumni data from your API
    axios.get('http://localhost:4000/student')
      .then((response) => {
        setAlumniData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching alumni data:', error);
      });
  }, []);


  return (
    <>
      <main>
        <h1>Alumni Page</h1>
        {/* <a href="/about">About</a>  anchor tag is avoided while linking as it will reload the page but its 
        a single page application so no reloading needed but whenm reloads using a tag all the states will reintialised to very starting states which is not req */}
         <Link to={'/'}>back</Link>
         <AlumniCardSlider alumniData={alumniData} />
         <AlumniCardList alumniData={alumniData} />

      </main>
    </>
  );
}

export default Alumni;
