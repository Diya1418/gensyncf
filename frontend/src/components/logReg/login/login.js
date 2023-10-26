import React, { useState } from "react";
import {Link , useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from 'react-toastify';
import style from "./login.module.css"

const Login = (setIsAuthenticated) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
   
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/student/login', formData)
      .then((response) => {
        
        const token = response.data.token;

        //return  <Link to={'/'}>back</Link>
        console.log('Login successful:', response.data);
        // Handle success (e.g., show a success message or redirect)
        toast.success('Login successful');
        
        localStorage.setItem('token',token)

        //setIsAuthenticated(true);

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

  return (
    <>
    <div>
    <div className={style.one}></div>
    <img className={style.wave} src="https://github.com/sefyudem/Responsive-Login-Form/blob/master/img/wave.png?raw=true"/>
	<div className= {style.container}>
		<div className={style.img}>
			<img className={style.innerimg} src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/bg.svg"/>
		</div>
		<div className= {style.logincontent}>
    <form className ={style.myform} onSubmit={handleSubmit}>
				<img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg"/>
				<h2 className= {style.title}>Welcome</h2>
           		<div className= {style.inputdivone}>
           		   <div className={style.i}>
           		   		<i className= {style.fasfauser}></i>
           		   </div>
           		   <div className={style.div}>
           		   		<h5>Email</h5>
                      <input className={style.input}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                 </div>
           		   </div>
           		<div className= {style.inputdivpass}>
           		   <div className={style.i}> 
           		    	<i className={style.fasfalock}></i>
           		   </div>
           		   <div className={style.div}>
           		    	<h5>Password</h5>
                     <input
                     className={style.input}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
            	   </div>
            	</div>
            	<a className="style.anchor" href="#">Forgot Password?</a>
            	<input type="submit" class="btn" value="Login"/>
            </form>
            <Link to={'/Register'}>Register</Link>
        </div>
    </div>
    </div>
    
    </>
    // <>
    //   <h2>Login</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label>Email:</label>
    //       <input
    //         type="email"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label>Password:</label>
    //       <input
    //         type="password"
    //         name="password"
    //         value={formData.password}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //     <button type="submit">Login</button>
    //   </form>
    //   <Link to={'/Register'}>Register</Link>
    // </>
  );
};

export default Login;

