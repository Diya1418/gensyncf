 import {Link} from 'react-router-dom';
// import React, { useState } from "react";
// import axios from "axios"
// import style from "./register.module.css";

// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirm_password: '',
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:4000/student/register', formData);

//       // Handle response as needed, e.g., check response.status, show success or error messages.
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle network or other errors.
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <>
//       <main>
//         <h1>Register Page</h1>
//         {/* <a href="/about">About</a>  anchor tag is avoided while linking as it will reload the page but its 
//         a single page application so no reloading needed but whenm reloads using a tag all the states will reintialised to very starting states which is not req */}
//         <Link to={'/'}>back</Link>

//       </main>
       
//       <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Your name"
//         required
//         value={formData.name}
//         onChange={handleChange}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Your email"
//         required
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         required
//         value={formData.password}
//         onChange={handleChange}
//       />
//       <input
//         type="password"
//         name="confirm_password"
//         placeholder="Confirm Password"
//         required
//         value={formData.confirm_password}
//         onChange={handleChange}
//       />
//       <input type="submit" value="Sign Up" />
      
//       </form>

//       <p>Already a member? <a href="/user/sign-in">Sign In</a></p>

//     </>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import axios from "axios"

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    startYear: '',
    endYear: '',
    degree: '',
    branch: '',
    rollNumber: '',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    imageUrl: '',
    socialProfiles: {
      linkedin: '',
      github: '',
    },
    skills: [''], 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // setFormData({ ...formData, [name]: value });
    if (name.startsWith('socialProfiles.')) {
      // Update socialProfiles field
     
      const socialProfilesField = name.split('.')[1];
       console.log(socialProfilesField)
      setFormData({
        ...formData,
        socialProfiles: {
          ...formData.socialProfiles,
          [socialProfilesField]: value,
        },
      });
    } else {
      // Update other fields
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/student/register', formData)
      .then((response) => {
        console.log('Registration successful:', response.data);
        // Handle success (e.g., show a success message or redirect)
      })
      .catch((error) => {
        console.error('Error:', error);
        
        // Handle errors (e.g., display an error message)
      });
    // Send the formData to your backend for registration
    // You can use Axios or Fetch for this purpose.
    // Example: axios.post('/student/register', formData)
  };
  const handleSkillChange = (e, index) => {
    const skills = [...formData.skills];
    skills[index] = e.target.value;
    setFormData({ ...formData, skills });
  };

  const addSkill = () => {
    const skills = [...formData.skills];
    skills.push('');
    setFormData({ ...formData, skills });
  };

  const removeSkill = (index) => {
    const skills = [...formData.skills];
    skills.splice(index, 1);
    setFormData({ ...formData, skills });
  };


  return (
    <>
    <main>
             <h1>Register Page</h1>
            {/* <a href="/about">About</a>  anchor tag is avoided while linking as it will reload the page but its 
         a single page application so no reloading needed but whenm reloads using a tag all the states will reintialised to very starting states which is not req */}
          <Link to={'/'}>back</Link>
    
          </main>
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        value={formData.password}
        onChange={handleChange}
      />
      <input
        type="number"
        name="startYear"
        placeholder="Start Year"
        required
        value={formData.startYear}
        onChange={handleChange}
      />
      <input
        type="number"
        name="endYear"
        placeholder="End Year"
        required
        value={formData.endYear}
        onChange={handleChange}
      />
      <input
        type="text"
        name="degree"
        placeholder="Degree"
        required
        value={formData.degree}
        onChange={handleChange}
      />
      <input
        type="text"
        name="branch"
        placeholder="Branch"
        required
        value={formData.branch}
        onChange={handleChange}
      />
      <input
        type="text"
        name="rollNumber"
        placeholder="Roll Number"
        required
        value={formData.rollNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        required
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
       <input
          type="number"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
       <input
          type="text"
          name="socialProfiles.linkedin"
          placeholder="LinkedIn Profile"
          value={formData.socialProfiles.linkedin}
          onChange={handleChange}
        />
        <input
          type="text"
          name="socialProfiles.github"
          placeholder="GitHub Profile"
          value={formData.socialProfiles.github}
          onChange={handleChange}
        />
         <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
        />
         {formData.skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              name={`skills[${index}]`}
              placeholder="Skill"
              value={skill}
              required
              onChange={(e) => handleSkillChange(e, index)}
            />
            <button type="button" onClick={() => removeSkill(index)}>
              Remove Skill
            </button>
          </div>
        ))}
        <button type="button" onClick={addSkill}>
          Add Skill
        </button>
      <button type="submit">Register</button>
    </form>
    </>
  );
};

export default RegisterForm;


