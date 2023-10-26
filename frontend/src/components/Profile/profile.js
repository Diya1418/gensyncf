import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [studentData, setStudentData] = useState(null);

  // Fetch student data when the component mounts
  useEffect(() => {
    axios.get('http://localhost:4000/student/profile', {
      headers: {
        // Include the user's JWT token for authentication
        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Modify to fit your token storage
      },
    })
      .then((response) => {
        console.log('Profile data:', response.data);
        setStudentData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors (e.g., redirect to login page if not authenticated)
      });
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {studentData ? (
        <div>
          <p>Name: {studentData.firstName} {studentData.lastName}</p>
          <p>Email: {studentData.email}</p>
          <p>Roll Number: {studentData.rollNumber}</p>
          {/* Display other student data fields here */}
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
};

export default Profile;
