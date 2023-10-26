
// // Profile.js

// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';

// function Profile() {
//   const [profileData, setProfileData] = useState({}); // State to store the profile data

//   useEffect(() => {
//     // Fetch the user's profile data when the component mounts
//     const fetchData = async () => {
//       try {
//         const response = await Axios.get('http://localhost:4000/profile', {
//           headers: {
//             'x-auth': localStorage.getItem('token'), // Include the user's token for authentication
//           },
//         });
//         setProfileData(response.data);
//       } catch (error) {
//         console.error('Error fetching profile data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Profile Page</h1>
//       {/* Display and allow users to edit their profile information */}
//     </div>
//   );
// }

// export default Profile;

import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import style from './profile.module.css';


function Profile() {
  const [profileData, setProfileData] = useState({
    startYear: 0,
    endYear: 0,
    degree: '',
    branch: '',
    rollNumber: '',
    firstName: '',
    lastName: '',
    mobileNumber: 0,
    socialProfiles: {
      linkedin: '',
      github: '',
    },
    imageUrl: '',
    skills: [],
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log(token,"this is token");
        const response = await Axios.get('http://localhost:4000/student/profile', {
          headers: {
            'x-auth': token,
          },
        });
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    // Save the updated profile data to the server using Axios
    try {
      const token = localStorage.getItem('token');
      await Axios.patch('http://localhost:4000/student/profile', profileData, {
        headers: {
          'x-auth': token,
        },
      });
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleLogoutClick = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log(token,"this iss")
      toast.info('Logged out successfully');
      await Axios.delete('http://localhost:4000/student/logout', {
        headers: {
          'x-auth': token,
        },
      });
      console.log("logged out!!")
      localStorage.removeItem('token'); // Remove the token from local storage
      // You can also redirect the user to the login page or any other page
      // after successfully logging out.
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    
    <div>
      <h1>Profile Page</h1>
      {isEditing ? (
        <div>
          {/* Editable Fields */}
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleInputChange}
            />
          </div>
          
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Degree:</label>
            <input
              type="text"
              name="degree"
              value={profileData.degree}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Branch:</label>
            <input
              type="text"
              name="branch"
              value={profileData.branch}
              onChange={handleInputChange}
            />
          </div>
           <div>
           <label>Roll Number:</label>
           <input
             type="text"
             name="rollNumber"
             value={profileData.rollNumber}
             onChange={handleInputChange}
           />
         </div>
         <div>
            <label>Image URL:</label>
            <input
              type="text"
              name="imageUrl"
              value={profileData.imageUrl}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Skills:</label>
            <input
              type="text"
              name="skills"
              value={profileData.skills.join(', ')} // Convert skills array to a comma-separated string
              onChange={handleInputChange}
            />
          </div>
          {/* Add more editable fields for other profile information */}
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          {/* Display Fields */}
          <p>First Name: {profileData.firstName}</p>
          <p>Last Name: {profileData.lastName}</p>
          <p>Degree: {profileData.degree}</p>
          <p>Branch: {profileData.branch}</p>
          <p>Roll Number: {profileData.rollNumber}</p>
          <p>Start Year: {profileData.startYear}</p>
          <p>End Year: {profileData.endYear}</p>
          <p>Mobile Number: {profileData.mobileNumber}</p>
          <p>LinkedIn: <a href={profileData.socialProfiles.linkedin}>{profileData.socialProfiles.linkedin}</a></p>
          <p>Github:  <a href={profileData.socialProfiles.github}>{profileData.socialProfiles.github}</a></p>
          <p>Image URL: {profileData.imageUrl}</p>
          <p>Skills: {profileData.skills.join(', ')}</p>
          {/* Display other profile information */}
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
            <button onClick={handleLogoutClick}>Logout</button>
    </div>
  
  

  );
}
// >>>>>>> upstream/main

export default Profile;
