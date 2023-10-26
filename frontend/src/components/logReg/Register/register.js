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
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Style from './register.module.css'

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

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/student/register', formData)
      .then((response) => {
        console.log('Registration successful:', response.data);
        // Handle success (e.g., show a success message or redirect)
        navigate('/');
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
    <div className={Style.two}>
    <img className={Style.wave} src="https://github.com/sefyudem/Responsive-Login-Form/blob/master/img/wave.png?raw=true"/>
      <div className={Style.container}>
      <div className={Style.img}>
			<img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/bg.svg"/>
		</div>
              {/* <h1 className={Style.heading}>Registration</h1> */}
              
              {/* <a href="/about">About</a>  anchor tag is avoided while linking as it will reload the page but its 
          a single page application so no reloading needed but whenm reloads using a tag all the states will reintialised to very starting states which is not req */}
            {/* <Link to={'/'}>back</Link> */}
      
          
      <form onSubmit={handleSubmit}>
        {/* <div className={Style.pic}>
      <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg"/>
      </div> */}
      <h1 className={Style.reg}>REGISTRATION PAGE</h1>
      <div className={Style.mainuserinfo}>
        
            <div className={Style.userinputbox}>
            {/* <label for="Email"></label> */}
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        </div>

        <div className={Style.userinputbox}>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        </div>

        <div className={Style.userinputbox}>
        <input
          type="number"
          name="startYear"
          placeholder="Start Year"
          required
          value={formData.startYear}
          onChange={handleChange}
        />
        </div>

        <div className={Style.userinputbox}>
        <input
          type="number"
          name="endYear"
          placeholder="End Year"
          required
          value={formData.endYear}
          onChange={handleChange}
        />
        </div>

        <div className={Style.userinputbox}>
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          required
          value={formData.degree}
          onChange={handleChange}
        />
        </div>

        <div className={Style.userinputbox}>
        <input
          type="text"
          name="branch"
          placeholder="Branch"
          required
          value={formData.branch}
          onChange={handleChange}
        />
        </div>

        <div className={Style.userinputbox}>
        <input
          type="text"
          name="rollNumber"
          placeholder="Roll Number"
          required
          value={formData.rollNumber}
          onChange={handleChange}
        />
    </div>

    <div className={Style.userinputbox}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          value={formData.firstName}
          onChange={handleChange}
        />
        </div>

        <div className={Style.userinputbox}>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        </div>

        <div className={Style.userinputbox}>
        <input
            type="number"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          </div>

          <div className={Style.userinputbox}>
        <input
            type="text"
            name="socialProfiles.linkedin"
            placeholder="LinkedIn Profile"
            value={formData.socialProfiles.linkedin}
            onChange={handleChange}
          />
          </div>

          <div className={Style.userinputbox}>
          <input
            type="text"
            name="socialProfiles.github"
            placeholder="GitHub Profile"
            value={formData.socialProfiles.github}
            onChange={handleChange}
          />
          </div>

          <div className={Style.userinputbox}>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
          />
          </div>

           {/* <div className={Style.genderdetailsbox}>
            <span className={Style.gendertitle}>Gender</span>
            <div className={style.gendercategory}>
              <input type="radio" name="gender" id="male">
              <label for="male">Male</label>
              <input type="radio" name="gender" id="female">
              <label for="female">Female</label>
              <input type="radio" name="gender" id="other">
              <label for="other">Other</label>
            </div>  */}
          {/* </div> */}

          <div className={Style.userinputbox}>
          {formData.skills.map((skill, index) => (
            <div div key={index}>
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

          </div>
          <button className={Style.formsubmitbtn} type="button" onClick={addSkill}>
            Add Skill
          </button>
        <button className={Style.formsubmitbtn} type="submit">Register</button>
        </div>
      </form>
     </div>
     </div>
     
    </>

    // <>
    // <main>
    //          <h1>Register Page</h1>
    //         {/* <a href="/about">About</a>  anchor tag is avoided while linking as it will reload the page but its 
    //      a single page application so no reloading needed but whenm reloads using a tag all the states will reintialised to very starting states which is not req */}
    //       <Link to={'/'}>back</Link>
    
    //       </main>
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="email"
    //     name="email"
    //     placeholder="Your email"
    //     required
    //     value={formData.email}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="password"
    //     name="password"
    //     placeholder="Password"
    //     required
    //     value={formData.password}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="number"
    //     name="startYear"
    //     placeholder="Start Year"
    //     required
    //     value={formData.startYear}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="number"
    //     name="endYear"
    //     placeholder="End Year"
    //     required
    //     value={formData.endYear}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="text"
    //     name="degree"
    //     placeholder="Degree"
    //     required
    //     value={formData.degree}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="text"
    //     name="branch"
    //     placeholder="Branch"
    //     required
    //     value={formData.branch}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="text"
    //     name="rollNumber"
    //     placeholder="Roll Number"
    //     required
    //     value={formData.rollNumber}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="text"
    //     name="firstName"
    //     placeholder="First Name"
    //     required
    //     value={formData.firstName}
    //     onChange={handleChange}
    //   />
    //   <input
    //     type="text"
    //     name="lastName"
    //     placeholder="Last Name"
    //     value={formData.lastName}
    //     onChange={handleChange}
    //   />
    //    <input
    //       type="number"
    //       name="mobileNumber"
    //       placeholder="Mobile Number"
    //       value={formData.mobileNumber}
    //       onChange={handleChange}
    //     />
    //    <input
    //       type="text"
    //       name="socialProfiles.linkedin"
    //       placeholder="LinkedIn Profile"
    //       value={formData.socialProfiles.linkedin}
    //       onChange={handleChange}
    //     />
    //     <input
    //       type="text"
    //       name="socialProfiles.github"
    //       placeholder="GitHub Profile"
    //       value={formData.socialProfiles.github}
    //       onChange={handleChange}
    //     />
    //      <input
    //       type="text"
    //       name="imageUrl"
    //       placeholder="Image URL"
    //       value={formData.imageUrl}
    //       onChange={handleChange}
    //     />
    //      {formData.skills.map((skill, index) => (
    //       <div key={index}>
    //         <input
    //           type="text"
    //           name={`skills[${index}]`}
    //           placeholder="Skill"
    //           value={skill}
    //           required
    //           onChange={(e) => handleSkillChange(e, index)}
    //         />
    //         <button type="button" onClick={() => removeSkill(index)}>
    //           Remove Skill
    //         </button>
    //       </div>
    //     ))}
    //     <button type="button" onClick={addSkill}>
    //       Add Skill
    //     </button>
    //   <button type="submit">Register</button>
    // </form>
    // </>

  );
};

export default RegisterForm;



