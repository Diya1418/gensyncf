import Nav from "./components/navbar/nav";
import Login from "./components/logReg/login/login";
import Register from "./components/logReg/Register/register";
import Notices from "./components/Notices/notices";
import Events from "./components/Events/events";
import Alumni from "./components/Alumni/alumni";
import Home from "./components/Home/home";
<<<<<<< HEAD
import Profile from "./components/Profile/profile";
=======
import Profile from "./components/Profile/profile"
>>>>>>> upstream/main
import Axios from "axios"; //used to send and rev=ceive req from backend
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, RouterProvider,Routes,Route,Link} from "react-router-dom";
import { useState,useEffect } from "react";
// import PrivateRoute from './PrivateRoute'; 
import { createBrowserRouter} from "react-router-dom";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data,setData]=useState("")

  const getData= async()=>{
    const response = await Axios.get("http://localhost:4000/getData");
    setData(response.data);
  }
  useEffect(()=>{
    getData()
  },[]);

  const router = createBrowserRouter([
    {path:'/', element:<Nav/>, children:[
      {index:true , element:<Home/>},
      {path:'/alumni', element:<Alumni/>},
      {path:'/login', element:<Login setIsAuthenticated={setIsAuthenticated}/>},
      {path:'/Register', element:<Register/>},
      {path:'/notices', element:<Notices/>},
      {path:'/events', element:<Events/>},
<<<<<<< HEAD
      {path:'/profile', element:<Profile/>},
=======
      {path:'/profile', element:<Profile/>}
      // {path:'/profile',
      //  element:<PrivateRoute component={Profile} 
      //  isAuthenticated={isAuthenticated} /> },

>>>>>>> upstream/main

    ],
  },
  ]);

  return (
    // <Router>
    
    // <Routes> {/* Wrap your routes with the Routes component */}
    //   <Route path="/" element={<Nav />}>
    //     <Route index element={<Home />} />
    //     <Route path="alumni" element={<Alumni />} />
    //     <Route path="login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
    //     <Route path="register" element={<Register />} />
    //     <Route path="notices" element={<Notices />} />
    //     <Route path="events" element={<Events />} />
    //     <Route path="profile" element ={<Profile/>}
    //     {/* <Route path="profile" element={<PrivateRoute component={Profile} isAuthenticated={isAuthenticated} />} /> */}
      
    // </Routes>
    <>
    <RouterProvider router={router}/>

    <ToastContainer />
    {console.log(data)}
    </>
    // </Router>
  
  );
}

export default App;
// import Nav from "./components/navbar/nav";
// import Login from "./components/logReg/login/login";
// import Register from "./components/logReg/Register/register";
// import Notices from "./components/Notices/notices";
// import Events from "./components/Events/events";
// import Alumni from "./components/Alumni/alumni";
// import Home from "./components/Home/home";
// import Profile from "./components/Profile/profile";
// import Axios from "axios"; // Used to send and receive requests from the backend
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { createRoutes } from "react-router-dom";
// import { useState, useEffect } from "react";
// import PrivateRoute from './PrivateRoute';
// import { Routes, Route } from "react-router-dom";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [data, setData] = useState("");

//   const getData = async () => {
//     const response = await Axios.get("http://localhost:4000/getData");
//     setData(response.data);
//   }

//   useEffect(() => {
//     getData()
//   }, []);

//   return (
//     <>
//       <Nav />
//       <ToastContainer />
//       {console.log(data)}
//       <Routes>
//         <Route
//           path="/"
//           element={<Home />}
//         />
//         <Route
//           path="/alumni"
//           element={<Alumni />}
//         />
//         <Route
//           path="/login"
//           element={<Login />}
//         />
//         <Route
//           path="/register"
//           element={<Register />}
//         />
//         <Route
//           path="/notices"
//           element={<Notices />}
//         />
//         <Route
//           path="/events"
//           element={<Events />}
//         />
//         <Route
//           path="/profile"
//           element={<PrivateRoute component={Profile} isAuthenticated={isAuthenticated} />}
//         />
//       </Routes>
//     </>
//   );
// }

// export default App;
